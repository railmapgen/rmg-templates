import { TemplateTicketEntry } from '../../redux/ticket/ticket-slice';
import useTranslatedName from '../hooks/use-translated-name';
import { useTranslation } from 'react-i18next';
import { RmgCard, RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';
import { Box, Button, HStack, Icon, IconButton, SystemStyleObject, Text, VStack } from '@chakra-ui/react';
import { ChangeEvent, useRef } from 'react';
import { readFileAsText } from '../../util/utils';
import { MdAdd, MdClose, MdDelete, MdInsertDriveFile } from 'react-icons/md';
import { LANGUAGE_NAMES, LanguageCode, SUPPORTED_LANGUAGES } from '@railmapgen/rmg-translate';
import useTemplates from '../hooks/use-templates';

const style: SystemStyleObject = {
    position: 'relative',

    '& > div': {
        overflow: 'hidden',
    },

    '& > div:first-of-type': {
        '& > div': {
            width: '100%',
        },

        '& > button': {
            width: '100%',
            my: 2,
        },
    },

    '& > div:last-of-type': {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minW: 120,

        '& input': {
            display: 'none',
        },
    },
};

interface TemplateEntryCardProps {
    company: string;
    templateEntry: TemplateTicketEntry;
    onLineChange: (line: string) => void;
    onNewLineChange: (newLine: string) => void;
    onMajorFlagChange: (majorUpdate: boolean) => void;
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
        onMajorFlagChange,
        onLineNameChange,
        onOptionalNameChange,
        onParamChange,
        onParamImport,
        onRemove,
    } = props;
    const { line, newLine, majorUpdate, templateName, optionalName, param } = templateEntry;

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
        };
    });

    const getOptionalLanguageFields = (lang: LanguageCode, name: string): RmgFieldsField[] => {
        return [
            {
                type: 'select',
                label: t('Language'),
                value: lang,
                options: Object.entries(LANGUAGE_NAMES).reduce(
                    (acc, cur) => ({
                        ...acc,
                        [cur[0]]: translateName(cur[1]),
                    }),
                    {} as Record<LanguageCode, string>
                ),
                disabledOptions: Object.keys(LANGUAGE_NAMES)
                    .filter(l => SUPPORTED_LANGUAGES.includes(l as any) || optionalName.some(entry => entry[0] === l))
                    .filter(l => l !== lang),
                onChange: value => handleLanguageSwitch(lang, value as LanguageCode),
            },
            {
                type: 'input',
                label: t('Name'),
                value: name,
                onChange: value => handleUpdateOptionalName(lang, value),
                validator: value => !!value,
            },
        ];
    };

    const handleAddOptionalName = () => {
        const availableLanguages = Object.keys(LANGUAGE_NAMES).filter(
            l => !SUPPORTED_LANGUAGES.includes(l as any) && !optionalName.some(entry => entry[0] === l)
        ) as LanguageCode[];
        if (availableLanguages.includes('ko')) {
            onOptionalNameChange([...optionalName, ['ko', '']]);
        } else {
            onOptionalNameChange([...optionalName, [availableLanguages[0], '']]);
        }
    };

    const handleLanguageSwitch = (prevLang: LanguageCode, nextLang: LanguageCode) => {
        onOptionalNameChange(optionalName.map(entry => (entry[0] === prevLang ? [nextLang, entry[1]] : entry)));
    };

    const handleUpdateOptionalName = (lang: LanguageCode, name: string) => {
        onOptionalNameChange(optionalName.map(entry => (entry[0] === lang ? [entry[0], name] : entry)));
    };

    const handleRemoveOptionalName = (lang: LanguageCode) => {
        onOptionalNameChange(optionalName.filter(entry => entry[0] !== lang));
    };

    return (
        <RmgCard sx={style}>
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

            <VStack spacing={0}>
                <RmgFields fields={[...fields, ...languageFields]} minW={110} />

                {optionalName.length === 0 && (
                    <Button variant="ghost" size="sm" leftIcon={<MdAdd />} onClick={handleAddOptionalName}>
                        {t('Add more translations')}
                    </Button>
                )}

                {optionalName.map(([lang, name], idx, arr) => (
                    <HStack key={lang}>
                        <RmgFields fields={getOptionalLanguageFields(lang, name)} noLabel={idx > 0} />
                        {idx === arr.length - 1 ? (
                            <IconButton
                                size="sm"
                                variant="ghost"
                                aria-label={t('Add translation')}
                                title={t('Add translation')}
                                onClick={handleAddOptionalName}
                                icon={<MdAdd />}
                            />
                        ) : (
                            <Box minW={8} />
                        )}

                        {
                            <IconButton
                                size="sm"
                                variant="ghost"
                                aria-label={t('Remove this translation')}
                                title={t('Remove this translation')}
                                onClick={() => handleRemoveOptionalName(lang as LanguageCode)}
                                icon={<MdDelete />}
                            />
                        }
                    </HStack>
                ))}
            </VStack>

            <VStack>
                {param ? (
                    <>
                        <Icon as={MdInsertDriveFile} boxSize={10} />
                        <Text as="i" fontSize="xs">
                            ({t('Size')}: {JSON.stringify(param).length} {t('chars')})
                        </Text>
                        <Button size="sm" onClick={() => onParamChange(undefined)}>
                            {t('Remove')}
                        </Button>
                    </>
                ) : (
                    <>
                        <Text as="i" fontSize="sm">
                            {t('Import from')}
                        </Text>
                        <HStack spacing={1}>
                            <Button size="sm" onClick={onParamImport}>
                                RMG
                            </Button>
                            <Button size="sm" onClick={() => inputRef.current?.click()}>
                                {t('Local')}
                            </Button>
                            <input ref={inputRef} type="file" accept=".json" onChange={handleFileUpload} />
                        </HStack>
                    </>
                )}
            </VStack>
        </RmgCard>
    );
}
