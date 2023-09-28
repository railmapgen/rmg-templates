import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { RmgEnvBadge, RmgWindowHeader } from '@railmapgen/rmg-components';
import rmgRuntime from '@railmapgen/rmg-runtime';

const VersionBadge = () => {
    const environment = rmgRuntime.getEnv();
    const appVersion = rmgRuntime.getAppVersion();

    return <RmgEnvBadge environment={environment} version={appVersion} />;
};

export const WindowHeader = () => {
    const { t } = useTranslation();

    return (
        <RmgWindowHeader>
            <Heading as="h4" size="md">
                {t('RMG Templates')}
            </Heading>
            <VersionBadge />
        </RmgWindowHeader>
    );
};

export const TicketWindowHeader = () => {
    const { t } = useTranslation();

    return (
        <RmgWindowHeader>
            <Heading as="h4" size="md">
                {t('RMG Templates') + ' - ' + t('Upload')}
            </Heading>
            <VersionBadge />
        </RmgWindowHeader>
    );
};

export const PickerWindowHeader = () => {
    const { t } = useTranslation();

    return (
        <RmgWindowHeader isAppClipHeader>
            <Heading as="h4" size="md">
                {t('RMG Templates') + ' - ' + t('Selector')}
            </Heading>
        </RmgWindowHeader>
    );
};
