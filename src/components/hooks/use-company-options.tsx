import { useRootSelector } from '../../redux';
import { useTranslation } from 'react-i18next';
import useTranslatedName from './use-translated-name';

export default function useCompanyOptions() {
    const { t, i18n } = useTranslation();
    const translateName = useTranslatedName();

    const { coreCompanyConfig, otherCompanyConfig } = useRootSelector(state => state.app);

    const coreOptions = coreCompanyConfig
        .map(company => [company.id, translateName(company.name)]) // translate country name
        .reduce<Record<string, string>>(
            (acc, cur) => {
                return { ...acc, [cur[0]]: cur[1] };
            },
            { '': t('Please select...') }
        );
    const otherOptions = otherCompanyConfig
        .map(company => [company.id, translateName(company.name)]) // translate country name
        .sort((a, b) => a[1].localeCompare(b[1], i18n.languages[0])) // sort
        .reduce<Record<string, string>>((acc, cur) => {
            return { ...acc, [cur[0]]: cur[1] };
        }, {});

    return { [t('Core companies')]: coreOptions, [t('Other companies')]: otherOptions };
}
