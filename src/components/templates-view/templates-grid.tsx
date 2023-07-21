import { useRootSelector } from '../../redux';
import useTemplates from '../hooks/use-templates';
import { Avatar, Flex, Heading, SimpleGrid, SystemStyleObject, Tag, TagLabel, Text } from '@chakra-ui/react';
import { RmgCard } from '@railmapgen/rmg-components';
import useTranslatedName from '../hooks/use-translated-name';
import React from 'react';
import { useTranslation } from 'react-i18next';

const cardStyles: SystemStyleObject = {
    flexDirection: 'column',
    p: 2,

    '& h2': {
        mb: 2,
    },
};

export default function TemplatesGrid() {
    const { t } = useTranslation();
    const translateName = useTranslatedName();

    const { selectedCompany } = useRootSelector(state => state.app);
    const { templates } = useTemplates(selectedCompany);

    if (!templates.length) {
        return (
            <Flex h="100%" w="100%" alignItems="center" justifyContent="center">
                <Text as="i">{t('No templates available in selected company.')}</Text>
            </Flex>
        );
    }

    return (
        <SimpleGrid minChildWidth={220} spacing={2} px={2} maxH="100%" overflowY="scroll">
            {templates.map(template => (
                <RmgCard key={template.filename} sx={cardStyles}>
                    <Heading as="h2" size="md">
                        {translateName(template.name)}
                    </Heading>
                    <Text fontSize="sm">
                        {t('Uploader')}
                        {': '}
                        <Tag
                            size="sm"
                            borderRadius="full"
                            onClick={() =>
                                window.open(
                                    `https://github.com/railmapgen/rmg-templates/issues?q=is:issue+author:${template.uploadBy}`,
                                    '_blank'
                                )
                            }
                            cursor="pointer"
                        >
                            <Avatar src={`https://github.com/${template.uploadBy}.png`} size="xs" ml={-1} mr={2} />
                            <TagLabel>{template.uploadBy}</TagLabel>
                        </Tag>
                    </Text>
                </RmgCard>
            ))}
        </SimpleGrid>
    );
}
