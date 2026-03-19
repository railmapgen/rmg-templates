import classes from './submit-modal.module.css';
import { useTranslation } from 'react-i18next';
import { useRootSelector } from '../../redux';
import { useEffect, useState } from 'react';
import { InvalidReasonType } from '../../util/constant';
import { ticketSelectors } from '../../redux/ticket/ticket-slice';
import SubmitModalStepError from './submit-modal-step-error';
import SubmitModalStepJustification from './submit-modal-step-justification';
import SubmitModalStepSubmit from './submit-modal-step-submit';
import { getInitialJustification, JustificationUpdateHandler } from './justification';
import { Modal, Stepper } from '@mantine/core';

interface SubmitModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SubmitModal(props: SubmitModalProps) {
    const { isOpen, onClose } = props;

    const { t } = useTranslation();

    const [companyErrors, setCompanyErrors] = useState<InvalidReasonType[]>([]);
    const [templateErrors, setTemplateErrors] = useState<Record<string, InvalidReasonType[]>>({});

    const [justification, setJustification] = useState(getInitialJustification());
    const [isFinishJustification, setIsFinishJustification] = useState(false);

    const { coreCompanyConfig, otherCompanyConfig, templateList } = useRootSelector(state => state.app);
    const ticket = useRootSelector(state => state.ticket);
    const companyName = ticketSelectors.getCompanyEnglishName(ticket, [...coreCompanyConfig, ...otherCompanyConfig]);
    const companyBlock = ticketSelectors.getCompanyBlock(ticket);
    const templateBlocks = ticketSelectors.getTemplateBlocks(ticket);

    const handleUpdateJustification: JustificationUpdateHandler = (key, value) => {
        setJustification(prevState => ({ ...prevState, [key]: value }));
    };

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
            handleUpdateJustification('majorUpdateComments', majorJustificationsHolder);
        } else {
            // reset modal
            setIsFinishJustification(false);
        }
    }, [isOpen]);

    const isContainError = companyErrors.length > 0 || Object.values(templateErrors).flat().length > 0;
    const isShowStepJustification = !isContainError && !isFinishJustification;

    const getActiveStep = () => {
        if (isContainError) {
            return 0;
        }
        if (isShowStepJustification) {
            return 1;
        }
        return 2;
    };

    return (
        <Modal
            classNames={{ content: classes.content, body: classes.body }}
            opened={isOpen}
            onClose={onClose}
            title={t('Submit templates')}
        >
            <Stepper
                active={getActiveStep()}
                classNames={{ root: classes['stepper-root'], content: classes['stepper-content'] }}
            >
                <Stepper.Step label={t('Validate')}>
                    <SubmitModalStepError
                        companyErrors={companyErrors}
                        templateErrors={templateErrors}
                        onClose={onClose}
                    />
                </Stepper.Step>
                <Stepper.Step label={t('Justify')}>
                    <SubmitModalStepJustification
                        justification={justification}
                        onJustificationUpdate={handleUpdateJustification}
                        onNext={() => setIsFinishJustification(true)}
                    />
                </Stepper.Step>
                <Stepper.Step label={t('Submit')}>
                    <SubmitModalStepSubmit
                        companyName={companyName}
                        companyBlock={companyBlock}
                        templateBlocks={templateBlocks}
                        justification={justification}
                        onPrev={() => setIsFinishJustification(false)}
                        onClose={onClose}
                    />
                </Stepper.Step>
            </Stepper>
        </Modal>
    );
}
