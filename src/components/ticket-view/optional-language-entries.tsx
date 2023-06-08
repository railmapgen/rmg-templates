import { LANGUAGE_NAMES, LanguageCode, SUPPORTED_LANGUAGES } from '@railmapgen/rmg-translate';
import { Box, Button, HStack, IconButton } from '@chakra-ui/react';
import { MdAdd, MdDelete } from 'react-icons/md';
import { RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';
import { useTranslation } from 'react-i18next';
import useTranslatedName from '../hooks/use-translated-name';

interface OptionalLanguageEntriesProps {
    optionalName: [LanguageCode, string][];
    onChange: (optionalName: [LanguageCode, string][]) => void;
}

export default function OptionalLanguageEntries(props: OptionalLanguageEntriesProps) {
    const { optionalName, onChange } = props;

    const { t } = useTranslation();
    const translateName = useTranslatedName();

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
            onChange([...optionalName, ['ko', '']]);
        } else {
            onChange([...optionalName, [availableLanguages[0], '']]);
        }
    };

    const handleLanguageSwitch = (prevLang: LanguageCode, nextLang: LanguageCode) => {
        onChange(optionalName.map(entry => (entry[0] === prevLang ? [nextLang, entry[1]] : entry)));
    };

    const handleUpdateOptionalName = (lang: LanguageCode, name: string) => {
        onChange(optionalName.map(entry => (entry[0] === lang ? [entry[0], name] : entry)));
    };

    const handleRemoveOptionalName = (lang: LanguageCode) => {
        onChange(optionalName.filter(entry => entry[0] !== lang));
    };

    return (
        <>
            {optionalName.length === 0 && (
                <Button variant="ghost" size="sm" leftIcon={<MdAdd />} onClick={handleAddOptionalName} w="100%" my={2}>
                    {t('Add more translations')}
                </Button>
            )}

            {optionalName.map(([lang, name], idx, arr) => (
                <HStack key={lang} sx={{ w: '100%', '& > div:first-of-type': { flex: 1 } }}>
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
        </>
    );
}
