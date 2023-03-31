import { TemplateTicketEntry } from '../../redux/ticket/ticket-slice';
import useTranslatedName from '../hooks/use-translated-name';
import { useTranslation } from 'react-i18next';
import { RmgCard, RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';
import { IconButton, Input } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { readFileAsText } from '../../util/utils';
import { MdClose } from 'react-icons/md';
import { LANGUAGE_NAMES, SUPPORTED_LANGUAGES } from '@railmapgen/rmg-translate';
import useTemplates from '../hooks/use-templates';

interface TemplateEntryCardProps {
    company: string;
    templateEntry: TemplateTicketEntry;
    onLineChange: (line: string) => void;
    onNewLineChange: (newLine: string) => void;
    onMajorFlagChange: (majorUpdate: boolean) => void;
    onLineNameChange: (lang: string, name: string) => void;
    onParamChange: (param: Record<string, any>) => void;
    onRemove: () => void;
}

export default function TemplateEntryCard(props: TemplateEntryCardProps) {
    const {
        company,
        templateEntry,
        onLineChange,
        onNewLineChange,
        onMajorFlagChange,
        onLineNameChange,
        onParamChange,
        onRemove,
    } = props;
    const { line, newLine, majorUpdate, templateName } = templateEntry;

    const { t } = useTranslation();
    const translateName = useTranslatedName();

    const { templates } = useTemplates(company);

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
        } catch (err) {
            alert('Invalid file!');
            event.target.value = '';
        }
    };

    const lineOptions: Record<string, string> = {
        '': t('Please select...'),
        ...(company === '' || company === 'new'
            ? {}
            : templates.reduce((acc, cur) => {
                  return { ...acc, [cur.filename]: translateName(cur.name) };
              }, {})),
        new: t('Add a line...'),
    };

    const fields: RmgFieldsField[] = [
        {
            type: 'select',
            label: t('Line'),
            value: line,
            options: lineOptions,
            disabledOptions: [''],
            onChange: value => onLineChange(value as string),
            minW: 150,
        },
        {
            type: 'custom',
            label: t('Configuration file'),
            component: <Input variant="flushed" size="xs" type="file" accept=".json" onChange={handleFileUpload} />,
            minW: 250,
        },
        {
            type: 'input',
            label: t('Line code'),
            placeholder: 'e.g. twl, gz1, sh1',
            value: newLine,
            onChange: value => onNewLineChange(value as string),
            hidden: line !== 'new',
        },
        {
            type: 'switch',
            label: t('Major update'),
            isChecked: majorUpdate,
            onChange: value => onMajorFlagChange(value),
            hidden: line === 'new',
            oneLine: true,
        },
    ];

    const languageFields: RmgFieldsField[] = SUPPORTED_LANGUAGES.map(lang => {
        return {
            type: 'input',
            label: translateName(LANGUAGE_NAMES[lang]),
            value: templateName[lang],
            onChange: value => onLineNameChange(lang, value),
            minW: lang === 'en' ? 260 : undefined,
        };
    });

    return (
        <RmgCard position="relative" direction="column">
            <IconButton
                size="sm"
                variant="ghost"
                icon={<MdClose />}
                aria-label={t('Remove this line')}
                title={t('Remove this line')}
                position="absolute"
                top={0}
                right={0}
                zIndex={5}
                onClick={onRemove}
            />
            <RmgFields fields={[...fields, ...languageFields]} minW={110} />
        </RmgCard>
    );
}
