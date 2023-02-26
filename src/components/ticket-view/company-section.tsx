import { Box, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { RmgCard, RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';
import { useRootDispatch, useRootSelector } from '../../redux';
import useTranslatedName from '../hooks/use-translated-name';
import { setCompany, setCompanyNameByLang, setNewCompany } from '../../redux/ticket/ticket-slice';
import { LANGUAGE_NAMES, SUPPORTED_LANGUAGES } from '@railmapgen/rmg-translate';

export default function CompanySection() {
    const { t, i18n } = useTranslation();
    const translateName = useTranslatedName();

    const dispatch = useRootDispatch();
    const { companyConfig } = useRootSelector(state => state.app);
    const { company, newCompany, companyName } = useRootSelector(state => state.ticket);

    const companyOptions = {
        ...companyConfig
            .map(company => [company.id, translateName(company.name)]) // translate country name
            .sort((a, b) => a[1].localeCompare(b[1], i18n.languages[0])) // sort
            .reduce<Record<string, string>>(
                (acc, cur) => {
                    return { ...acc, [cur[0]]: cur[1] };
                },
                { '': t('Please select...') }
            ),
        new: t('Add a company...'),
    };

    const fields: RmgFieldsField[] = [
        {
            type: 'select',
            label: t('Company'),
            value: company,
            options: companyOptions,
            disabledOptions: [''],
            onChange: value => dispatch(setCompany(value as string)),
        },
        {
            type: 'input',
            label: t('Company code'),
            placeholder: 'e.g. mtr, gzmtr, shmetro',
            value: newCompany,
            onChange: value => dispatch(setNewCompany(value)),
            hidden: company !== 'new',
        },
    ];

    const languageFields: RmgFieldsField[] = SUPPORTED_LANGUAGES.map(lang => {
        return {
            type: 'input',
            label: translateName(LANGUAGE_NAMES[lang]),
            value: companyName[lang],
            onChange: value => dispatch(setCompanyNameByLang({ lang, name: value })),
        };
    });

    return (
        <Box as="section">
            <Heading as="h5" size="sm" mb={2}>
                {t('Railway company')}
            </Heading>

            <RmgCard direction="column">
                <RmgFields fields={fields} />
                {company === 'new' && <RmgFields fields={languageFields} />}
            </RmgCard>
        </Box>
    );
}
