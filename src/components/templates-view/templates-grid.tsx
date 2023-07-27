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

    '&.selected': {
        outlineColor: 'primary.500',
        outlineWidth: 2,
        outlineStyle: 'solid',

        '[data-theme="dark"] &': {
            outlineColor: 'primary.200',
        },
    },

    '& h2': {
        mb: 2,
    },

    '& .card-author': {
        borderRadius: 'full',
        cursor: 'pointer',
    },
};

interface TemplatesGridProps {
    selectedTemplate?: string;
    onTemplateSelect?: (value: string) => void;
}

export default function TemplatesGrid(props: TemplatesGridProps) {
    const { selectedTemplate, onTemplateSelect } = props;

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
        <SimpleGrid minChildWidth={220} spacing={2} px={2} pb={2} maxH="100%" overflowY="scroll">
            {templates.map(template => {
                const { filename, name, uploadBy } = template;
                return (
                    <RmgCard
                        key={filename}
                        className={selectedTemplate === filename ? 'selected' : ''}
                        onClick={() => onTemplateSelect?.(filename)}
                        cursor={!onTemplateSelect ? 'unset' : 'pointer'}
                        sx={cardStyles}
                    >
                        <Heading as="h2" size="md">
                            {translateName(name)}
                        </Heading>
                        <Text fontSize="sm">
                            {t('Uploader')}
                            {': '}
                            <Tag
                                size="sm"
                                className="card-author"
                                onClick={() =>
                                    !onTemplateSelect &&
                                    window.open(
                                        `https://github.com/railmapgen/rmg-templates/issues?q=is:issue+author:${uploadBy}`,
                                        '_blank'
                                    )
                                }
                            >
                                <Avatar src={`https://github.com/${uploadBy}.png`} size="xs" ml={-1} mr={2} />
                                <TagLabel>{uploadBy}</TagLabel>
                            </Tag>
                        </Text>
                    </RmgCard>
                );
            })}
        </SimpleGrid>
    );
}
