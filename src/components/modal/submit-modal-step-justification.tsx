import { useTranslation } from 'react-i18next';
import { RmgButtonGroup, RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';
import { Button, ModalBody, ModalFooter, Text } from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';
import { REFERENCE_SOURCE_DISPLAY_TEXT, ReferenceSource } from '../../util/constant';
import useTranslatedName from '../hooks/use-translated-name';

const urlValidator = (url: string): boolean => !!url.match(/^https?:\/\//)?.[0];

interface SubmitModalStepJustificationProps {
    haveBeenOpened: boolean;
    onHaveBeenOpenedChange: (value: boolean) => void;
    willBeOpened: boolean;
    onWillBeOpenedChange: (value: boolean) => void;
    refSource: ReferenceSource | '';
    onRefSourceChange: (value: ReferenceSource | '') => void;
    refLink: string;
    onRefLinkChange: (value: string) => void;
    justification: string;
    majorUpdateJustifications: Record<string, string>;
    onJustificationChange: (value: string) => void;
    onMajorUpdateJustificationChange: (line: string, value: string) => void;
    onNext: () => void;
}

export default function SubmitModalStepJustification(props: SubmitModalStepJustificationProps) {
    const {
        haveBeenOpened,
        onHaveBeenOpenedChange,
        willBeOpened,
        onWillBeOpenedChange,
        refSource,
        onRefSourceChange,
        refLink,
        onRefLinkChange,
        justification,
        majorUpdateJustifications,
        onJustificationChange,
        onMajorUpdateJustificationChange,
        onNext,
    } = props;

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

    const fields: RmgFieldsField[] = [
        {
            type: 'custom',
            label: t('Have all of the lines been officially opened?'),
            component: (
                <RmgButtonGroup
                    selections={binaryOptions}
                    defaultValue={haveBeenOpened}
                    onChange={onHaveBeenOpenedChange}
                />
            ),
        },
        {
            type: 'custom',
            label: t('Will they be opened soon? Are all of the station names finalised?'),
            component: (
                <RmgButtonGroup
                    selections={binaryOptions}
                    defaultValue={willBeOpened}
                    onChange={onWillBeOpenedChange}
                />
            ),
            hidden: haveBeenOpened,
        },
        {
            type: 'select',
            label: t('Reference source'),
            options: refSourceOptions,
            disabledOptions: [''],
            value: refSource,
            onChange: value => onRefSourceChange(value as ReferenceSource),
        },
        {
            type: 'input',
            value: refLink,
            label: t('Reference link'),
            placeholder: t('Enter a valid URL, e.g.') + ' https://en.wikipedia.org',
            onChange: onRefLinkChange,
            validator: urlValidator,
            isDisabled: refSource === 'STATION_UPLOAD_IMAGE',
        },
        {
            type: 'textarea',
            value: justification,
            label: t('Justification'),
            placeholder: t('Briefly describe your changes and provide justification'),
            onChange: onJustificationChange,
        },
    ];

    const majorUpdateFields: RmgFieldsField[] = Object.entries(majorUpdateJustifications).map(([line, value]) => ({
        type: 'textarea',
        value,
        label: t('Justification for major update of') + ' ' + line,
        placeholder: t('Briefly describe your changes and provide justification'),
        onChange: value => onMajorUpdateJustificationChange(line, value),
    }));

    const meetCriteria = haveBeenOpened || willBeOpened;
    const refOk = refSource === 'STATION_UPLOAD_IMAGE' || (refSource && refLink);
    const isNextDisabled =
        !meetCriteria || !refOk || !justification || Object.values(majorUpdateJustifications).some(value => !value);

    return (
        <>
            <ModalBody>
                <Text>{t('Please provide suitable source and justification.')}</Text>
                <RmgFields fields={[...fields, ...majorUpdateFields]} minW="full" />
            </ModalBody>
            <ModalFooter>
                <Button
                    colorScheme="primary"
                    onClick={onNext}
                    rightIcon={<MdChevronRight />}
                    isDisabled={isNextDisabled}
                >
                    {t('Next')}
                </Button>
            </ModalFooter>
        </>
    );
}
