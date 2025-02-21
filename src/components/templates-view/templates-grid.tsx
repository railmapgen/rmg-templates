import classes from './templates-grid.module.css';
import { useRootSelector } from '../../redux';
import useTemplates from '../hooks/use-templates';
import useTranslatedName from '../hooks/use-translated-name';
import { useTranslation } from 'react-i18next';
import { TemplateEntry } from '@railmapgen/rmg-templates-resources';
import { RMPageBody } from '@railmapgen/mantine-components';
import { Avatar, AvatarGroup, Card, LoadingOverlay, SimpleGrid, Text, Title } from '@mantine/core';
import clsx from 'clsx';

interface TemplatesGridProps {
    selectedTemplate?: TemplateEntry;
    onTemplateSelect?: (value: TemplateEntry) => void;
}

export default function TemplatesGrid(props: TemplatesGridProps) {
    const { selectedTemplate, onTemplateSelect } = props;

    const { t } = useTranslation();
    const translateName = useTranslatedName();

    const { selectedCompany } = useRootSelector(state => state.app);
    const { templates } = useTemplates(selectedCompany);

    return (
        <RMPageBody>
            <LoadingOverlay
                visible={!templates.length}
                loaderProps={{ children: t('No templates available in selected company.') }}
            />
            <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} classNames={{ root: classes.grid }}>
                {templates.map(template => {
                    const { filename, name, uploadBy } = template;
                    return (
                        <Card
                            key={filename}
                            className={clsx(classes.card, selectedTemplate === template && classes.selected)}
                            withBorder
                            onClick={() => onTemplateSelect?.(template)}
                        >
                            <Card.Section px="sm" py="xs">
                                <Title size="h4">{translateName(name)}</Title>
                            </Card.Section>
                            <Text span>{t('Authors')}</Text>
                            <AvatarGroup>
                                {onTemplateSelect ? (
                                    <Avatar
                                        src={`https://github.com/${uploadBy}.png`}
                                        alt={uploadBy}
                                        name={uploadBy}
                                        title={uploadBy}
                                        color="initials"
                                    />
                                ) : (
                                    <Avatar
                                        component="a"
                                        href={`https://github.com/railmapgen/rmg-templates/issues?q=is:issue+author:${uploadBy}`}
                                        target="_blank"
                                        src={`https://github.com/${uploadBy}.png`}
                                        alt={uploadBy}
                                        name={uploadBy}
                                        title={t('View all templates authored by') + ' ' + uploadBy}
                                        color="initials"
                                    />
                                )}
                            </AvatarGroup>
                        </Card>
                    );
                })}
            </SimpleGrid>
        </RMPageBody>
    );
}
