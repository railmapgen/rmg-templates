import { useTranslation } from 'react-i18next';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { RMEnvBadge, RMWindowHeader } from '@railmapgen/mantine-components';
import { Title } from '@mantine/core';

const VersionBadge = () => {
    const environment = rmgRuntime.getEnv();
    const appVersion = rmgRuntime.getAppVersion();

    return <RMEnvBadge env={environment} ver={appVersion} />;
};

export const WindowHeader = () => {
    const { t } = useTranslation();

    return (
        <RMWindowHeader>
            <Title>{t('RMG Templates')}</Title>
            <VersionBadge />
        </RMWindowHeader>
    );
};

export const TicketWindowHeader = () => {
    const { t } = useTranslation();

    return (
        <RMWindowHeader>
            <Title>{t('RMG Templates') + ' - ' + t('Upload')}</Title>
            <VersionBadge />
        </RMWindowHeader>
    );
};

export const PickerWindowHeader = () => {
    const { t } = useTranslation();

    return (
        <RMWindowHeader isAppClipHeader>
            <Title>{t('RMG Templates') + ' - ' + t('Selector')}</Title>
        </RMWindowHeader>
    );
};
