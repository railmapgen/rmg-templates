import { useTranslation } from 'react-i18next';
import { RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';
import { Button, ModalBody, ModalFooter, Text } from '@chakra-ui/react';
import { MdChevronRight } from 'react-icons/md';

interface SubmitModalStepJustificationProps {
    justification: string;
    onJustificationChange: (value: string) => void;
    onNext: () => void;
}

export default function SubmitModalStepJustification(props: SubmitModalStepJustificationProps) {
    const { justification, onJustificationChange, onNext } = props;

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

    const isNextDisabled = !justification;

    return (
        <>
            <ModalBody>
                <Text>{t('Please provide suitable source and justification.')}</Text>
                <RmgFields fields={fields} minW="full" />
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
