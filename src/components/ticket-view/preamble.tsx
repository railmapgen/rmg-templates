import { useTranslation } from 'react-i18next';
import { RMSection, RMSectionBody, RMSectionHeader } from '@railmapgen/mantine-components';
import { List, Text, Title } from '@mantine/core';

export default function Preamble() {
    const { t } = useTranslation();
    return (
        <RMSection>
            <RMSectionHeader>
                <Title order={2} size="h4">
                    {t('Acceptance criteria')}
                </Title>
            </RMSectionHeader>

            <RMSectionBody direction="column" py="xs">
                <Text>{t('acceptanceCriteria.preamble')}</Text>
                <List withPadding>
                    <List.Item>{t('acceptanceCriteria.item1')}</List.Item>
                    <List.Item>{t('acceptanceCriteria.item2')}</List.Item>
                </List>
            </RMSectionBody>
        </RMSection>
    );
}
