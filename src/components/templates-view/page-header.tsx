import { useDispatch } from 'react-redux';
import { setSelectedCompany } from '../../redux/app/app-slice';
import { useRootSelector } from '../../redux';
import { useTranslation } from 'react-i18next';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { Events } from '../../util/constant';
import useCompanyOptions from '../hooks/use-company-options';
import { RMPageHeader } from '@railmapgen/mantine-components';
import { Button, Group, Select } from '@mantine/core';

export default function PageHeader() {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { selectedCompany } = useRootSelector(state => state.app);

    const companyOptions = useCompanyOptions();

    const handleUploadTemplates = () => {
        rmgRuntime.openApp({ appId: 'rmg-templates-upload' });
        rmgRuntime.event(Events.UPLOAD_TEMPLATES, {});
    };

    return (
        <RMPageHeader>
            <Group gap="xs" flex={1} align="flex-end">
                <Select
                    label={t('Company')}
                    value={selectedCompany}
                    onChange={value => value && dispatch(setSelectedCompany(value))}
                    data={companyOptions}
                    searchable
                />

                <Button variant="filled" ml="auto" onClick={handleUploadTemplates}>
                    {t('Upload templates')}
                </Button>
            </Group>
        </RMPageHeader>
    );
}
