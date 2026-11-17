import { useRootSelector } from '../../redux';
import { useTranslation } from 'react-i18next';
import useTranslatedName from './use-translated-name';
import { ComboboxData } from '@mantine/core';

export default function useCompanyOptions(): ComboboxData {
    const { t, i18n } = useTranslation();
    const translateName = useTranslatedName();

    const { coreCompanyConfig, otherCompanyConfig } = useRootSelector(state => state.app);

    const coreOptions = coreCompanyConfig.map(company => ({ value: company.id, label: translateName(company.name) })); // translate country name
    const otherOptions = otherCompanyConfig
        .map(company => ({ value: company.id, label: translateName(company.name) })) // translate country name
        .sort((a, b) => a.label.localeCompare(b.label, i18n.languages[0])); // sort

    return [
        { value: '', label: t('Please select...'), disabled: true },
        {
            group: t('Core companies'),
            items: coreOptions,
        },
        {
            group: t('Other companies'),
            items: otherOptions,
        },
    ];
}
