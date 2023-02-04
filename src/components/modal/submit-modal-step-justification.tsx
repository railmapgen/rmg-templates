import { useTranslation } from 'react-i18next';
import { RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';
import { Button, ModalBody, ModalFooter, Text } from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';

interface SubmitModalStepJustificationProps {
    justification: string;
    majorUpdateJustifications: Record<string, string>;
    onJustificationChange: (value: string) => void;
    onMajorUpdateJustificationChange: (line: string, value: string) => void;
    onNext: () => void;
}

export default function SubmitModalStepJustification(props: SubmitModalStepJustificationProps) {
    const {
        justification,
        majorUpdateJustifications,
        onJustificationChange,
        onMajorUpdateJustificationChange,
        onNext,
    } = props;

    const { t } = useTranslation();

    const fields: RmgFieldsField[] = [
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

    const isNextDisabled = !justification || Object.values(majorUpdateJustifications).some(value => !value);

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
