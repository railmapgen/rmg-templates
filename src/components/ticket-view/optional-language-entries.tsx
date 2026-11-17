import { LANGUAGE_NAMES, LanguageCode, SUPPORTED_LANGUAGES } from '@railmapgen/rmg-translate';
import { MdAdd, MdDeleteOutline } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import useTranslatedName from '../hooks/use-translated-name';
import { ActionIcon, Box, Button, Fieldset, Flex, Group, Select, TextInput } from '@mantine/core';

interface OptionalLanguageEntriesProps {
    optionalName: [LanguageCode, string][];
    onChange: (optionalName: [LanguageCode, string][]) => void;
}

export default function OptionalLanguageEntries(props: OptionalLanguageEntriesProps) {
    const { optionalName, onChange } = props;

    const { t } = useTranslation();
    const translateName = useTranslatedName();

    const languageOptions = Object.entries(LANGUAGE_NAMES).map(([lang, name]) => ({
        value: lang,
        label: translateName(name),
        disabled: SUPPORTED_LANGUAGES.includes(lang as any) || optionalName.some(entry => entry[0] === lang),
    }));

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

    return optionalName.length === 0 ? (
        <Button leftSection={<MdAdd />} onClick={handleAddOptionalName}>
            {t('Add a name in another language')}
        </Button>
    ) : (
        <Fieldset legend={t('Multi-languages')}>
            {optionalName.map(([lang, name], idx, arr) => (
                <Flex key={idx} pt={4} align="center" data-testid={'entry-card-stack-' + lang}>
                    <Group gap="xs" flex={1} grow>
                        <Select
                            size="xs"
                            aria-label={t('Language')}
                            value={lang}
                            onChange={value => handleLanguageSwitch(lang, value as LanguageCode)}
                            data={languageOptions}
                            searchable
                        />
                        <TextInput
                            size="xs"
                            aria-label={t('Name')}
                            placeholder={t('Enter name')}
                            value={name}
                            onChange={({ currentTarget: { value } }) => handleUpdateOptionalName(lang, value)}
                        />
                    </Group>
                    <Flex ml={8} wrap="nowrap">
                        {idx === arr.length - 1 ? (
                            <ActionIcon
                                size="sm"
                                variant="filled"
                                aria-label={t('Add a name in another language')}
                                title={t('Add a name in another language')}
                                onClick={handleAddOptionalName}
                            >
                                <MdAdd />
                            </ActionIcon>
                        ) : (
                            <Box w={22} />
                        )}

                        <ActionIcon
                            size="sm"
                            variant="outline"
                            aria-label={t('Remove this name')}
                            title={t('Remove this name')}
                            onClick={() => handleRemoveOptionalName(lang as LanguageCode)}
                            ml={4}
                        >
                            <MdDeleteOutline />
                        </ActionIcon>
                    </Flex>
                </Flex>
            ))}
        </Fieldset>
    );
}
