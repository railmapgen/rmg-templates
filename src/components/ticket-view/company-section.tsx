import { chakra, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { RmgCard, RmgFields, RmgFieldsField, RmgSection, RmgSectionHeader } from '@railmapgen/rmg-components';
import { useRootDispatch, useRootSelector } from '../../redux';
import useTranslatedName from '../hooks/use-translated-name';
import {
    setCompany,
    setCompanyNameByLang,
    setCompanyOptionalName,
    setNewCompany,
} from '../../redux/ticket/ticket-slice';
import { LANGUAGE_NAMES, SUPPORTED_LANGUAGES } from '@railmapgen/rmg-translate';
import OptionalLanguageEntries from './optional-language-entries';
import useCompanyOptions from '../hooks/use-company-options';

export default function CompanySection() {
    const { t } = useTranslation();
    const translateName = useTranslatedName();

    const dispatch = useRootDispatch();
    const { company, newCompany, companyName, companyOptionalName } = useRootSelector(state => state.ticket);

    const companyOptions = useCompanyOptions();

    const fields: RmgFieldsField[] = [
        {
            type: 'select',
            label: t('Company'),
            value: company,
            options: { ...companyOptions, [t('New')]: { new: t('Add a company...') } },
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
        <RmgSection>
            <RmgSectionHeader>
                <Heading as="h5" size="sm">
                    {t('Railway company')}
                </Heading>
            </RmgSectionHeader>

            <chakra.div px={1}>
                <RmgCard direction="column">
                    <RmgFields fields={fields} />
                    {company === 'new' && <RmgFields fields={languageFields} />}
                    {company === 'new' && (
                        <OptionalLanguageEntries
                            optionalName={companyOptionalName}
                            onChange={optionalName => dispatch(setCompanyOptionalName(optionalName))}
                        />
                    )}
                </RmgCard>
            </chakra.div>
        </RmgSection>
    );
}
