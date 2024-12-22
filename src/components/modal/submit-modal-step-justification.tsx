import { useTranslation } from 'react-i18next';
import { RmgButtonGroup, RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';
import { Button, ModalBody, ModalFooter, Text } from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';
import { REFERENCE_SOURCE_DISPLAY_TEXT, ReferenceSource } from '../../util/constant';
import useTranslatedName from '../hooks/use-translated-name';
import {
    isJustificationValid,
    Justification,
    JustificationUpdateHandler,
    meetAcceptanceCriteria,
} from './justification';

const urlValidator = (url: string): boolean => !!url.match(/^https?:\/\//)?.[0];

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
        { label: t('Yes'), value: true },
        { label: t('No'), value: false },
    ];

    const refSourceOptions = Object.fromEntries([
        ['', t('Please select...')],
        ...Object.entries(REFERENCE_SOURCE_DISPLAY_TEXT).map(([key, translation], i) => [
            key,
            `${i + 1}. ${translateName(translation)}`,
        ]),
    ]);

    const acceptanceFields: RmgFieldsField[] = [
        {
            type: 'custom',
            label: t('Have all of the lines been officially opened?'),
            component: (
                <RmgButtonGroup
                    selections={binaryOptions}
                    defaultValue={justification.isOpened}
                    onChange={value => onJustificationUpdate('isOpened', value)}
                />
            ),
        },
        {
            type: 'custom',
            label: t('Are they soon to be opened? Are all of the station names finalised?'),
            component: (
                <RmgButtonGroup
                    selections={binaryOptions}
                    defaultValue={justification.soonToBeOpened}
                    onChange={value => onJustificationUpdate('soonToBeOpened', value)}
                />
            ),
            hidden: justification.isOpened,
        },
        {
            type: 'custom',
            label: t('Is route map (network map) displayed in the stations of these lines?'),
            component: (
                <RmgButtonGroup
                    selections={binaryOptions}
                    defaultValue={justification.hasDiagramInStation}
                    onChange={value => onJustificationUpdate('hasDiagramInStation', value)}
                />
            ),
        },
    ];

    const justificationFields: RmgFieldsField[] = [
        {
            type: 'select',
            label: t('Reference source'),
            options: refSourceOptions,
            disabledOptions: [''],
            value: justification.source,
            onChange: value => onJustificationUpdate('source', value as ReferenceSource),
        },
        {
            type: 'input',
            value: justification.link,
            label: t('Reference link'),
            placeholder: t('Enter a valid URL, e.g.') + ' https://en.wikipedia.org',
            onChange: value => onJustificationUpdate('link', value),
            validator: urlValidator,
            isDisabled: justification.source === 'STATION_UPLOAD_IMAGE',
        },
        {
            type: 'textarea',
            value: justification.comments,
            label: t('Justification'),
            placeholder: t('Briefly describe your changes and provide justification'),
            onChange: value => onJustificationUpdate('comments', value),
        },
    ];

    const majorUpdateFields: RmgFieldsField[] = Object.entries(justification.majorUpdateComments).map(
        ([line, value]) => ({
            type: 'textarea',
            value,
            label: t('Justification for major update of') + ' ' + line,
            placeholder: t('Briefly describe your changes and provide justification'),
            onChange: value =>
                onJustificationUpdate('majorUpdateComments', {
                    ...justification.majorUpdateComments,
                    [line]: value,
                }),
        })
    );

    const isAcceptanceCriteriaMet = meetAcceptanceCriteria(justification);
    const isValid = isJustificationValid(justification);

    return (
        <>
            <ModalBody>
                <Text>{t('Please complete the questionnaire below.')}</Text>
                <RmgFields fields={acceptanceFields} minW="full" />
                {isAcceptanceCriteriaMet ? (
                    <>
                        <Text>{t('Please provide suitable source and justification.')}</Text>
                        <RmgFields fields={[...justificationFields, ...majorUpdateFields]} minW="full" />
                    </>
                ) : (
                    <Text as="i">{t('Sorry. The templates uploaded do not meet our acceptance criteria.')}</Text>
                )}
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="primary" onClick={onNext} rightIcon={<MdChevronRight />} isDisabled={!isValid}>
                    {t('Next')}
                </Button>
            </ModalFooter>
        </>
    );
}
