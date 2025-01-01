import { RmgSection, RmgSectionHeader } from '@railmapgen/rmg-components';
import { chakra, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Preamble() {
    const { t } = useTranslation();
    return (
        <RmgSection>
            <RmgSectionHeader>
                <Heading as="h5" size="sm">
                    {t('Acceptance criteria')}
                </Heading>
            </RmgSectionHeader>

            <chakra.div px={5}>
                <Text>{t('acceptanceCriteria.preamble')}</Text>
                <UnorderedList>
                    <ListItem>{t('acceptanceCriteria.item1')}</ListItem>
                    <ListItem>{t('acceptanceCriteria.item2')}</ListItem>
                </UnorderedList>
            </chakra.div>
        </RmgSection>
    );
}
