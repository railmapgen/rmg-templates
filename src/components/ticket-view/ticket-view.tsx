import { useTranslation } from 'react-i18next';
import CompanySection from './company-section';
import TemplatesSection from './templates-section';
import { useRootDispatch } from '../../redux';
import { resetTicket } from '../../redux/ticket/ticket-slice';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { Events } from '../../util/constant';
import { useState } from 'react';
import SubmitModal from '../modal/submit-modal';
import Preamble from './preamble';
import { RMPage, RMPageBody, RMPageFooter } from '@railmapgen/mantine-components';
import { Button, Divider, Group } from '@mantine/core';
import OpenIssuesAlert from './open-issues-alert';

export default function TicketView() {
    const { t } = useTranslation();

    const dispatch = useRootDispatch();
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

    const handleBack = () => {
        rmgRuntime.openApp({ appId: 'rmg-templates' });
    };

    const handleReset = () => {
        dispatch(resetTicket());
        rmgRuntime.event(Events.RESET_TICKETS, {});
    };

    return (
        <RMPage w={{ base: '100%', sm: 600 }} style={{ alignSelf: 'center' }}>
            <RMPageBody direction="column" px="xs" style={{ overflowY: 'auto' }}>
                <Preamble />
                <CompanySection />
                <OpenIssuesAlert />
                <TemplatesSection />
            </RMPageBody>

            <Divider />

            <RMPageFooter>
                <Group flex={1} gap="sm">
                    <Button variant="default" onClick={handleBack}>
                        {t('Back to list')}
                    </Button>

                    <Button variant="default" ml="auto" onClick={handleReset}>
                        {t('Reset')}
                    </Button>
                    <Button onClick={() => setIsSubmitModalOpen(true)}>{t('Submit')}</Button>
                </Group>
            </RMPageFooter>

            <SubmitModal isOpen={isSubmitModalOpen} onClose={() => setIsSubmitModalOpen(false)} />
        </RMPage>
    );
}
