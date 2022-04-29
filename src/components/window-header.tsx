import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { getEnvironment, getVersion } from '../util/config';
import { useTranslation } from 'react-i18next';
import { RmgEnvBadge } from '@railmapgen/rmg-components';

export default function WindowHeader() {
    const { t } = useTranslation();

    const environment = getEnvironment();

    return (
        <Flex pl={2} pr={2} pb={1} pt={1} align="center">
            <Heading as="h4" size="md" mr="auto">
                {t('Seed Project')}
                <RmgEnvBadge environment={environment} version={getVersion()} />
            </Heading>
        </Flex>
    );
}
