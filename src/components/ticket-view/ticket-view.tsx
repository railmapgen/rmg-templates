import { RmgPage } from '@railmapgen/rmg-components';
import { Button, Flex, HStack, SystemStyleObject } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import CompanySection from './company-section';
import TemplatesSection from './templates-section';
import { useRootDispatch } from '../../redux';
import { resetTicket } from '../../redux/ticket/ticket-slice';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { Events } from '../../util/constant';
import { useState } from 'react';
import SubmitModal from '../modal/submit-modal';

const styles: SystemStyleObject = {
    px: 2,
    pt: 2,
    width: { base: '100%', md: 520 },

    '& > div:first-of-type': {
        flexDirection: 'column',
        flex: 1,
        overflowY: 'auto',
    },

    '& > div:nth-of-type(2)': {
        my: 2,
    },
};

export default function TicketView() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const dispatch = useRootDispatch();
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

    const handleReset = () => {
        dispatch(resetTicket());
        rmgRuntime.event(Events.RESET_TICKETS, {});
    };

    return (
        <RmgPage sx={styles}>
            <Flex>
                <CompanySection />
                <TemplatesSection />
            </Flex>
            <Flex>
                <Button size="sm" onClick={() => navigate('/')}>
                    {t('Go back')}
                </Button>

                <HStack ml="auto">
                    <Button size="sm" variant="outline" onClick={handleReset}>
                        {t('Reset')}
                    </Button>
                    <Button size="sm" colorScheme="primary" onClick={() => setIsSubmitModalOpen(true)}>
                        {t('Submit')}
                    </Button>
                </HStack>
            </Flex>

            <SubmitModal isOpen={isSubmitModalOpen} onClose={() => setIsSubmitModalOpen(false)} />
        </RmgPage>
    );
}
