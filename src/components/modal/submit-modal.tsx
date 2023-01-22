import { useTranslation } from 'react-i18next';
import { useRootSelector } from '../../redux';
import { useEffect, useState } from 'react';
import { InvalidReasonType } from '../../util/constant';
import { ticketSelectors } from '../../redux/ticket/ticket-slice';
import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import SubmitModalStepError from './submit-modal-step-error';
import SubmitModalStepJustification from './submit-modal-step-justification';
import SubmitModalStepSubmit from './submit-modal-step-submit';

interface SubmitModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SubmitModal(props: SubmitModalProps) {
    const { isOpen, onClose } = props;

    const { t } = useTranslation();

    const [companyErrors, setCompanyErrors] = useState<InvalidReasonType[]>([]);
    const [templateErrors, setTemplateErrors] = useState<Record<string, InvalidReasonType[]>>({});
    const [justification, setJustification] = useState('');
    const [isFinishJustification, setIsFinishJustification] = useState(false);

    const ticket = useRootSelector(state => state.ticket);
    const companyName = ticketSelectors.getCompanyEnglishName(ticket);
    const companyBlock = ticketSelectors.getCompanyBlock(ticket);
    const templateBlocks = ticketSelectors.getTemplateBlocks(ticket);

    useEffect(() => {
        if (isOpen) {
            setCompanyErrors(ticketSelectors.getCompanyErrors(ticket));
            setTemplateErrors(ticketSelectors.getTemplateErrors(ticket));
        } else {
            // reset modal
            setJustification('');
            setIsFinishJustification(false);
        }
    }, [isOpen]);

    const isContainError = companyErrors.length > 0 || Object.values(templateErrors).flat().length > 0;
    const isShowStepJustification = !isContainError && !isFinishJustification;

    return (
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{t('Submit templates')}</ModalHeader>
                <ModalCloseButton />

                {isContainError && (
                    <SubmitModalStepError
                        companyErrors={companyErrors}
                        templateErrors={templateErrors}
                        onClose={onClose}
                    />
                )}

                {isShowStepJustification && (
                    <SubmitModalStepJustification
                        justification={justification}
                        onJustificationChange={setJustification}
                        onNext={() => setIsFinishJustification(true)}
                    />
                )}

                {!isContainError && isFinishJustification && (
                    <SubmitModalStepSubmit
                        companyName={companyName}
                        companyBlock={companyBlock}
                        templateBlocks={templateBlocks}
                        justification={justification}
                        onPrev={() => setIsFinishJustification(false)}
                    />
                )}
            </ModalContent>
        </Modal>
    );
}
