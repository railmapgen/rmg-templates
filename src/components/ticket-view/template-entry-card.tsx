import classes from './template-entry-card.module.css';
import { TemplateTicketEntry } from '../../redux/ticket/ticket-slice';
import useTranslatedName from '../hooks/use-translated-name';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, useRef } from 'react';
import { readFileAsText } from '../../util/utils';
import { MdInsertDriveFile } from 'react-icons/md';
import { LANGUAGE_NAMES, LanguageCode, SUPPORTED_LANGUAGES } from '@railmapgen/rmg-translate';
import useTemplates from '../hooks/use-templates';
import OptionalLanguageEntries from './optional-language-entries';
import { Button, Card, CloseButton, Group, NativeSelect, Stack, Text, TextInput } from '@mantine/core';

interface TemplateEntryCardProps {
    company: string;
    templateEntry: TemplateTicketEntry;
    onLineChange: (line: string) => void;
    onNewLineChange: (newLine: string) => void;
    onLineNameChange: (lang: string, name: string) => void;
    onOptionalNameChange: (optionalName: [LanguageCode, string][]) => void;
    onParamChange: (param?: Record<string, any>) => void;
    onParamImport: () => void;
    onRemove: () => void;
}

export default function TemplateEntryCard(props: TemplateEntryCardProps) {
    const {
        company,
        templateEntry,
        onLineChange,
        onNewLineChange,
        onLineNameChange,
        onOptionalNameChange,
        onParamChange,
        onParamImport,
        onRemove,
    } = props;
    const { line, newLine, templateName, optionalName, param } = templateEntry;

    const { t } = useTranslation();
    const translateName = useTranslatedName();

    const { templates } = useTemplates(company);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log('handleFileUpload():: received file', file);

        if (!file) {
            return;
        }

        if (file.type !== 'application/json') {
            alert('Invalid file type!');
            event.target.value = '';
            return;
        }

        try {
            const paramStr = await readFileAsText(file);
            onParamChange(JSON.parse(paramStr));
        } catch {
            alert('Invalid file!');
            event.target.value = '';
        }
    };

    const lineOptions = [
        { value: '', label: t('Please select...'), disabled: true },
        ...(company === '' || company === 'new'
            ? []
            : templates.map(template => ({ value: template.filename, label: translateName(template.name) }))),
        { value: 'new', label: t('Add a line...') },
    ];

    return (
        <Card withBorder className={classes.root}>
            <CloseButton
                className={classes['close-btn']}
                aria-label={t('Remove this line')}
                title={t('Remove this line')}
                onClick={onRemove}
            />

            <Stack gap="xs">
                <Group gap="xs" grow>
                    <NativeSelect
                        label={t('Line')}
                        value={line}
                        onChange={({ currentTarget: { value } }) => onLineChange(value)}
                        data={lineOptions}
                    />
                    {line === 'new' && (
                        <TextInput
                            label={t('Line code')}
                            placeholder="e.g. twl, gz1, sh1"
                            value={newLine}
                            onChange={({ currentTarget: { value } }) => onNewLineChange(value)}
                        />
                    )}
                </Group>

                <Group gap="xs" align="center" justify="center" className={classes.file}>
                    {param ? (
                        <>
                            <Text style={{ fontSize: 32 }}>
                                <MdInsertDriveFile />
                            </Text>
                            <Text component="span" fs="italic" size="xs">
                                ({JSON.stringify(param).length} {t('chars')})
                            </Text>
                            <Button variant="default" size="xs" onClick={() => onParamChange(undefined)}>
                                {t('Remove')}
                            </Button>
                        </>
                    ) : (
                        <>
                            <Text component="span" fs="italic" size="sm">
                                {t('Import from')}
                            </Text>
                            <Button variant="light" size="xs" onClick={onParamImport}>
                                RMG
                            </Button>
                            <Button variant="light" size="xs" onClick={() => inputRef.current?.click()}>
                                {t('Local')}
                            </Button>
                            <input ref={inputRef} type="file" accept=".json" onChange={handleFileUpload} />
                        </>
                    )}
                </Group>

                <Group gap="xs" grow>
                    {SUPPORTED_LANGUAGES.map(lang => (
                        <TextInput
                            key={lang}
                            label={translateName(LANGUAGE_NAMES[lang])}
                            value={templateName[lang]}
                            onChange={({ currentTarget: { value } }) => onLineNameChange(lang, value)}
                        />
                    ))}
                </Group>
                <OptionalLanguageEntries optionalName={optionalName} onChange={onOptionalNameChange} />
            </Stack>
        </Card>
    );
}
