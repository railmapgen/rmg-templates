import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { RmgEnvBadge, RmgWindowHeader } from '@railmapgen/rmg-components';
import rmgRuntime from '@railmapgen/rmg-runtime';

export default function WindowHeader() {
    const { t } = useTranslation();

    const environment = rmgRuntime.getEnv();
    const appVersion = rmgRuntime.getAppVersion();

    return (
        <RmgWindowHeader>
            <Heading as="h4" size="md">
                {t('RMG Templates')}
            </Heading>
            <RmgEnvBadge environment={environment} version={appVersion} />
        </RmgWindowHeader>
    );
}
