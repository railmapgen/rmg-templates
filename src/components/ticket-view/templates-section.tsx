import { useTranslation } from 'react-i18next';
import { useRootDispatch, useRootSelector } from '../../redux';
import TemplateEntryCard from './template-entry-card';
import {
    addTemplate,
    removeTemplate,
    setTemplateLineById,
    setTemplateLineNameById,
    setTemplateNewLineById,
    setTemplateOptionalNameById,
    setTemplateParamById,
} from '../../redux/ticket/ticket-slice';
import { MdAdd } from 'react-icons/md';
import useTemplates from '../hooks/use-templates';
import RmgParamAppClip from '../app-clip/rmg-param-app-clip';
import { useState } from 'react';
import { RMSection, RMSectionHeader } from '@railmapgen/mantine-components';
import { Button, LoadingOverlay, Stack, Title } from '@mantine/core';

export default function TemplatesSection() {
    const { t } = useTranslation();

    const dispatch = useRootDispatch();
    const { company, templates } = useRootSelector(state => state.ticket);
    const { templates: templateList, isLoading } = useTemplates(company);

    const [templateIdForAppClip, setTemplateIdForAppClip] = useState<string>();

    const handleLineChange = (entryId: string, line: string) => {
        const existingTemplate = templateList.find(entry => entry.filename === line);
        dispatch(setTemplateLineById({ id: entryId, line, name: existingTemplate?.name }));
    };

    const handleParamImport = (param: Record<string, any>) => {
        if (templateIdForAppClip) {
            dispatch(setTemplateParamById({ id: templateIdForAppClip, param }));
        }
        setTemplateIdForAppClip(undefined);
    };

    return (
        <RMSection>
            <LoadingOverlay visible={isLoading} />
            <RMSectionHeader>
                <Title order={2} size="h4">
                    {t('Add or update templates')}
                </Title>
            </RMSectionHeader>

            <Stack py={4} gap="xs">
                {templates.map(entry => (
                    <TemplateEntryCard
                        key={entry.id}
                        company={company}
                        templateEntry={entry}
                        onLineChange={line => handleLineChange(entry.id, line)}
                        onNewLineChange={newLine => dispatch(setTemplateNewLineById({ id: entry.id, newLine }))}
                        onLineNameChange={(lang, name) =>
                            dispatch(setTemplateLineNameById({ id: entry.id, lang, name }))
                        }
                        onOptionalNameChange={optionalName =>
                            dispatch(setTemplateOptionalNameById({ id: entry.id, optionalName }))
                        }
                        onParamChange={param => dispatch(setTemplateParamById({ id: entry.id, param }))}
                        onParamImport={() => setTemplateIdForAppClip(entry.id)}
                        onRemove={() => dispatch(removeTemplate(entry.id))}
                    />
                ))}

                <Button
                    variant="outline"
                    size="xs"
                    leftSection={<MdAdd />}
                    ml="auto"
                    onClick={() => dispatch(addTemplate())}
                >
                    {t('Add item')}
                </Button>
            </Stack>

            <RmgParamAppClip
                templateId={templateIdForAppClip}
                onClose={() => setTemplateIdForAppClip(undefined)}
                onImport={handleParamImport}
            />
        </RMSection>
    );
}
