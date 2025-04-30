import { useTranslation } from 'react-i18next';
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
import { RMSection, RMSectionHeader } from '@railmapgen/mantine-components';
import { Group, Select, Stack, TextInput, Title } from '@mantine/core';

export default function CompanySection() {
    const { t } = useTranslation();
    const translateName = useTranslatedName();

    const dispatch = useRootDispatch();
    const { company, newCompany, companyName, companyOptionalName } = useRootSelector(state => state.ticket);

    const companyOptions = useCompanyOptions();

    return (
        <RMSection>
            <RMSectionHeader>
                <Title order={2} size="h4">
                    {t('Railway company')}
                </Title>
            </RMSectionHeader>

            <Stack py="xs" gap="xs">
                <Group gap="xs" grow>
                    <Select
                        label={t('Company')}
                        value={company}
                        onChange={value => dispatch(setCompany(value as string))}
                        data={[...companyOptions, { value: 'new', label: t('Add a company...') }]}
                        searchable
                    />
                    {company === 'new' && (
                        <TextInput
                            label={t('Company code')}
                            placeholder="e.g. mtr, gzmtr, shmetro"
                            value={newCompany}
                            onChange={({ currentTarget: { value } }) => dispatch(setNewCompany(value))}
                        />
                    )}
                </Group>

                {company === 'new' && (
                    <Group gap="xs" grow>
                        {SUPPORTED_LANGUAGES.map(lang => (
                            <TextInput
                                key={lang}
                                label={translateName(LANGUAGE_NAMES[lang])}
                                value={companyName[lang]}
                                onChange={({ currentTarget: { value } }) =>
                                    dispatch(setCompanyNameByLang({ lang, name: value }))
                                }
                            />
                        ))}
                    </Group>
                )}

                {company === 'new' && (
                    <OptionalLanguageEntries
                        optionalName={companyOptionalName}
                        onChange={optionalName => dispatch(setCompanyOptionalName(optionalName))}
                    />
                )}
            </Stack>
        </RMSection>
    );
}
