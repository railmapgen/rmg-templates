import classes from './submit-modal.module.css';
import { useTranslation } from 'react-i18next';
import { MdChevronRight } from 'react-icons/md';
import { REFERENCE_SOURCE_DISPLAY_TEXT, ReferenceSource } from '../../util/constant';
import useTranslatedName from '../hooks/use-translated-name';
import {
    isJustificationValid,
    Justification,
    JustificationUpdateHandler,
    meetAcceptanceCriteria,
} from './justification';
import { Button, Group, NativeSelect, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { RMLabelledSegmentedControl } from '@railmapgen/mantine-components';

const urlValidator = (url: string): boolean => !!url.match(/^https?:\/\//)?.[0];
const TRUE = 'true';
const FALSE = 'false';

interface SubmitModalStepJustificationProps {
    justification: Justification;
    onJustificationUpdate: JustificationUpdateHandler;
    onNext: () => void;
}

export default function SubmitModalStepJustification(props: SubmitModalStepJustificationProps) {
    const { justification, onJustificationUpdate, onNext } = props;

    const { t } = useTranslation();
    const translateName = useTranslatedName();

    const binaryOptions = [
        { label: t('Yes'), value: TRUE },
        { label: t('No'), value: FALSE },
    ];

    const refSourceOptions = [
        { value: '', label: t('Please select...'), disabled: true },
        ...Object.entries(REFERENCE_SOURCE_DISPLAY_TEXT).map(([key, translation], i) => ({
            value: key,
            label: `${i + 1}. ${translateName(translation)}`,
        })),
    ];

    const isAcceptanceCriteriaMet = meetAcceptanceCriteria(justification);
    const isValid = isJustificationValid(justification);

    return (
        <>
            <Stack gap="xs" className={classes['step-body']}>
                <Text>{t('Please complete the questionnaire below.')}</Text>
                <Stack gap="xs">
                    <RMLabelledSegmentedControl
                        label={t('Have all of the lines been officially opened?')}
                        data={binaryOptions}
                        value={justification.isOpened ? TRUE : FALSE}
                        onChange={value => onJustificationUpdate('isOpened', value === TRUE)}
                    />
                    {!justification.isOpened && (
                        <RMLabelledSegmentedControl
                            label={t('Are they soon to be opened? Are all of the station names finalised?')}
                            data={binaryOptions}
                            value={justification.soonToBeOpened ? TRUE : FALSE}
                            onChange={value => onJustificationUpdate('soonToBeOpened', value === TRUE)}
                        />
                    )}
                    <RMLabelledSegmentedControl
                        label={t('Is route map (network map) displayed in the stations of these lines?')}
                        data={binaryOptions}
                        value={justification.hasDiagramInStation ? TRUE : FALSE}
                        onChange={value => onJustificationUpdate('hasDiagramInStation', value === TRUE)}
                    />
                </Stack>
                {isAcceptanceCriteriaMet ? (
                    <>
                        <Text>{t('Please provide suitable source and justification.')}</Text>
                        <Stack gap="xs">
                            <NativeSelect
                                label={t('Reference source')}
                                value={justification.source}
                                onChange={({ currentTarget: { value } }) =>
                                    onJustificationUpdate('source', value as ReferenceSource)
                                }
                                data={refSourceOptions}
                            />
                            <TextInput
                                label={t('Reference link')}
                                placeholder={t('Enter a valid URL, e.g.') + ' https://en.wikipedia.org'}
                                value={justification.link}
                                onChange={({ currentTarget: { value } }) => onJustificationUpdate('link', value)}
                                disabled={justification.source === 'STATION_UPLOAD_IMAGE'}
                                error={
                                    justification.link && !urlValidator(justification.link)
                                        ? t('URL is invalid')
                                        : undefined
                                }
                            />
                            <Textarea
                                label={t('Justification')}
                                placeholder={t('Briefly describe your changes and provide justification')}
                                value={justification.comments}
                                onChange={({ currentTarget: { value } }) => onJustificationUpdate('comments', value)}
                                autosize
                                minRows={3}
                            />
                        </Stack>
                    </>
                ) : (
                    <Text fs="italic">{t('Sorry. The templates uploaded do not meet our acceptance criteria.')}</Text>
                )}
            </Stack>
            <Group gap="sm" pt="xs">
                <Button ml="auto" onClick={onNext} rightSection={<MdChevronRight />} disabled={!isValid}>
                    {t('Next')}
                </Button>
            </Group>
        </>
    );
}
