import { useDispatch } from 'react-redux';
import { setSelectedCompany } from '../redux/app/app-slice';
import { RmgFields, RmgFieldsField, RmgPageHeader } from '@railmapgen/rmg-components';
import { useRootSelector } from '../redux';
import { useTranslation } from 'react-i18next';
import useTranslatedName from './hooks/use-translated-name';
import { companyConfig } from '@railmapgen/rmg-templates-resources';

export default function PageHeader() {
    const { t, i18n } = useTranslation();
    const translateName = useTranslatedName();

    const dispatch = useDispatch();

    const selectedCompany = useRootSelector(state => state.app.selectedCompany);

    const companyOptions = companyConfig
        .map(company => [company.id, translateName(company.name)]) // translate country name
        .sort((a, b) => a[1].localeCompare(b[1], i18n.languages[0])) // sort
        .reduce<Record<string, string>>(
            (acc, cur) => {
                return { ...acc, [cur[0]]: cur[1] };
            },
            { '': t('Please select...') }
        );

    const fields: RmgFieldsField[] = [
        {
            type: 'select',
            label: t('Company'),
            value: selectedCompany,
            options: companyOptions,
            disabledOptions: [''],
            onChange: value => dispatch(setSelectedCompany(value as string)),
        },
    ];

    return (
        <RmgPageHeader>
            <RmgFields fields={fields} />
        </RmgPageHeader>
    );
}
