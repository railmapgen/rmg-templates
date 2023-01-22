import { useTranslation } from 'react-i18next';
import { Box, Button, Heading, HStack } from '@chakra-ui/react';
import { useRootDispatch, useRootSelector } from '../../redux';
import TemplateEntryCard from './template-entry-card';
import {
    addTemplate,
    removeTemplate,
    setTemplateLineById,
    setTemplateLineNameById,
    setTemplateNewLineById,
    setTemplateParamById,
} from '../../redux/ticket/ticket-slice';
import { MdAdd } from 'react-icons/md';

export default function TemplatesSection() {
    const { t } = useTranslation();

    const dispatch = useRootDispatch();
    const { company, templates } = useRootSelector(state => state.ticket);

    return (
        <Box as="section" mt={3}>
            <Heading as="h5" size="sm" mb={2}>
                {t('Add or update templates')}
            </Heading>

            {templates.map(entry => (
                <TemplateEntryCard
                    key={entry.id}
                    company={company}
                    templateEntry={entry}
                    onLineChange={line => dispatch(setTemplateLineById({ id: entry.id, line }))}
                    onNewLineChange={newLine => dispatch(setTemplateNewLineById({ id: entry.id, newLine }))}
                    onLineNameChange={(lang, name) => dispatch(setTemplateLineNameById({ id: entry.id, lang, name }))}
                    onParamChange={param => dispatch(setTemplateParamById({ id: entry.id, param }))}
                    onRemove={() => dispatch(removeTemplate(entry.id))}
                />
            ))}

            <HStack justifyContent="flex-end">
                <Button variant="ghost" size="sm" leftIcon={<MdAdd />} onClick={() => dispatch(addTemplate())}>
                    {t('Add item')}
                </Button>
            </HStack>
        </Box>
    );
}
