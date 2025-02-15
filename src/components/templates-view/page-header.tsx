import { useDispatch } from 'react-redux';
import { setSelectedCompany } from '../../redux/app/app-slice';
import { RmgFields, RmgFieldsField, RmgPageHeader } from '@railmapgen/rmg-components';
import { useRootSelector } from '../../redux';
import { useTranslation } from 'react-i18next';
import { Button, HStack } from '@chakra-ui/react';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { useNavigate } from 'react-router-dom';
import { Events } from '../../util/constant';
import useCompanyOptions from '../hooks/use-company-options';

export default function PageHeader() {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { selectedCompany } = useRootSelector(state => state.app);

    const companyOptions = useCompanyOptions();

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
            rmgRuntime.openApp({ appId: 'rmg-templates-upload' });
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
