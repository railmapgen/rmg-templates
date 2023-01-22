import { LanguageCode } from '@railmapgen/rmg-translate';
import { useTranslation } from 'react-i18next';
import { RmgCard, RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';
import { Box, HStack, IconButton, SystemStyleObject } from '@chakra-ui/react';
import { MdAdd, MdDelete } from 'react-icons/md';

interface MultiLangEntryCardProps {
    translations: any[];
    onUpdate: (lang: LanguageCode, name: string) => void;
    onLangSwitch: (prevLang: LanguageCode, nextLang: LanguageCode) => void;
    onRemove: (lang: LanguageCode) => void;
}

const languageOptions = Object.entries(LanguageCode).reduce<Record<string, string>>((acc, cur) => {
    return { ...acc, [cur[1]]: cur[0] };
}, {});

const cardRowStyles: SystemStyleObject = {
    '& > div:first-of-type': {
        flex: 1,
    },
};

export default function MultiLangEntryCard(props: MultiLangEntryCardProps) {
    const { translations, onUpdate, onLangSwitch, onRemove } = props;
    const { t } = useTranslation();

    const getFields = (lang: LanguageCode, name: string): RmgFieldsField[] => {
        return [
            {
                type: 'select',
                label: t('Language'),
                value: lang,
                options: languageOptions,
                disabledOptions: translations.filter(entry => entry[0] !== lang).map(entry => entry[0]),
                onChange: value => onLangSwitch(lang, value as LanguageCode),
            },
            {
                type: 'input',
                label: t('Name'),
                value: name,
                onChange: value => onUpdate(lang, value),
                validator: value => !!value,
            },
        ];
    };

    const handleAddEntry = () => {
        const nextLang = Object.values(LanguageCode).filter(l => !translations.find(entry => entry[0] === l))[0];
        onUpdate(nextLang, '');
    };

    return (
        <RmgCard direction="column">
            {translations.map(([lang, name], idx, arr) => (
                <HStack key={idx} sx={cardRowStyles}>
                    <RmgFields fields={getFields(lang as LanguageCode, name)} noLabel={idx > 0} />
                    {idx === arr.length - 1 ? (
                        <IconButton
                            size="sm"
                            variant="ghost"
                            aria-label={t('Add a name in another language')}
                            title={t('Add a name in another language')}
                            onClick={handleAddEntry}
                            icon={<MdAdd />}
                        />
                    ) : (
                        <Box minW={8} />
                    )}

                    {arr.length > 1 && (
                        <IconButton
                            size="sm"
                            variant="ghost"
                            aria-label={t('Remove this name')}
                            title={t('Remove this name')}
                            onClick={() => onRemove(lang as LanguageCode)}
                            icon={<MdDelete />}
                        />
                    )}
                </HStack>
            ))}
        </RmgCard>
    );
}
