import { useTranslation } from 'react-i18next';
import { useRootSelector } from '../../redux';
import { useEffect, useState } from 'react';
import { InvalidReasonType, ReferenceSource } from '../../util/constant';
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

    const [haveBeenOpened, setHaveBeenOpened] = useState(false);
    const [willBeOpened, setWillBeOpened] = useState(false);
    const [refSource, setRefSource] = useState<ReferenceSource | ''>('');
    const [justification, setJustification] = useState('');
    const [majorUpdateJustifications, setMajorUpdateJustifications] = useState<Record<string, string>>({});
    const [isFinishJustification, setIsFinishJustification] = useState(false);

    const { coreCompanyConfig, otherCompanyConfig, templateList } = useRootSelector(state => state.app);
    const ticket = useRootSelector(state => state.ticket);
    const companyName = ticketSelectors.getCompanyEnglishName(ticket, [...coreCompanyConfig, ...otherCompanyConfig]);
    const companyBlock = ticketSelectors.getCompanyBlock(ticket);
    const templateBlocks = ticketSelectors.getTemplateBlocks(ticket);

    useEffect(() => {
        if (isOpen) {
            setCompanyErrors(ticketSelectors.getCompanyErrors(ticket));
            setTemplateErrors(ticketSelectors.getTemplateErrors(ticket));

            const majorJustificationsHolder = ticketSelectors
                .getMajorUpdateNames(ticket, templateList)
                .reduce<Record<string, string>>(
                    (acc, cur) => ({
                        ...acc,
                        [cur]: '',
                    }),
                    {}
                );
            setMajorUpdateJustifications(majorJustificationsHolder);
        } else {
            // reset modal
            setHaveBeenOpened(false);
            setWillBeOpened(false);
            setRefSource('');
            setJustification('');
            setMajorUpdateJustifications({});
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
                        haveBeenOpened={haveBeenOpened}
                        onHaveBeenOpenedChange={setHaveBeenOpened}
                        willBeOpened={willBeOpened}
                        onWillBeOpenedChange={setWillBeOpened}
                        refSource={refSource}
                        onRefSourceChange={setRefSource}
                        justification={justification}
                        majorUpdateJustifications={majorUpdateJustifications}
                        onJustificationChange={setJustification}
                        onMajorUpdateJustificationChange={(id, value) =>
                            setMajorUpdateJustifications(prevState => ({
                                ...prevState,
                                [id]: value,
                            }))
                        }
                        onNext={() => setIsFinishJustification(true)}
                    />
                )}

                {!isContainError && isFinishJustification && (
                    <SubmitModalStepSubmit
                        companyName={companyName}
                        companyBlock={companyBlock}
                        templateBlocks={templateBlocks}
                        haveBeenOpened={haveBeenOpened}
                        willBeOpened={willBeOpened}
                        refSource={refSource}
                        justification={justification}
                        majorUpdateJustifications={majorUpdateJustifications}
                        onPrev={() => setIsFinishJustification(false)}
                        onClose={onClose}
                    />
                )}
            </ModalContent>
        </Modal>
    );
}
