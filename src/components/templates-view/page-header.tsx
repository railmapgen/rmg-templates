import { useDispatch } from 'react-redux';
import { setSelectedCompany } from '../../redux/app/app-slice';
import { RmgFields, RmgFieldsField, RmgPageHeader } from '@railmapgen/rmg-components';
import { useRootSelector } from '../../redux';
import { useTranslation } from 'react-i18next';
import useTranslatedName from '../hooks/use-translated-name';
import { Button, HStack } from '@chakra-ui/react';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { useNavigate } from 'react-router-dom';
import { Events } from '../../util/constant';

export default function PageHeader() {
    const { t, i18n } = useTranslation();
    const translateName = useTranslatedName();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { companyConfig, selectedCompany } = useRootSelector(state => state.app);

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

    const handleUploadTemplates = () => {
        if (rmgRuntime.isStandaloneWindow()) {
            navigate('/new');
        } else {
            rmgRuntime.openApp('rmg-templates-upload');
        }
        rmgRuntime.event(Events.UPLOAD_TEMPLATES, {});
    };

    return (
        <RmgPageHeader>
            <RmgFields fields={fields} />

            <HStack ml="auto">
                <Button variant="solid" size="sm" colorScheme="primary" onClick={handleUploadTemplates}>
                    {t('Upload templates')}
                </Button>
            </HStack>
        </RmgPageHeader>
    );
}
