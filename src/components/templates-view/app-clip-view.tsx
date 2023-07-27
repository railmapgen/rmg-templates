import { RmgLoader, RmgPage } from '@railmapgen/rmg-components';
import PageHeader from './page-header';
import TemplatesGrid from './templates-grid';
import { useRootSelector } from '../../redux';
import { useEffect, useRef, useState } from 'react';
import { Alert, AlertIcon, Button, Divider, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { Events } from '../../util/constant';
import { useSearchParams } from 'react-router-dom';

const CHANNEL_PREFIX = 'rmg-templates-bridge--';

export default function AppClipView() {
    const { t } = useTranslation();

    const [searchParams] = useSearchParams();
    const parentId = searchParams.get('parentId');
    const parentComponent = searchParams.get('parentComponent');

    const { selectedCompany } = useRootSelector(state => state.app);
    const [selectedTemplate, setSelectedTemplate] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const channelRef = useRef<BroadcastChannel>();

    useEffect(() => {
        // channel that talks to parent (RMP import modal, RMG Templates upload modal)
        channelRef.current = new BroadcastChannel(CHANNEL_PREFIX + parentId);
        rmgRuntime.event(Events.APP_CLIP_VIEW_OPENED, { parentComponent });

        console.log(
            `[${channelRef.current?.name}] App clip connection established, parentComponent=${parentComponent}`
        );

        return () => {
            channelRef.current?.close();
        };
    }, []);

    useEffect(() => {
        setSelectedTemplate(undefined);
    }, [selectedCompany]);

    const handleImport = async () => {
        console.log(
            `[${channelRef.current?.name}] Emitting IMPORT event, company=${selectedCompany}, template=${selectedTemplate}`
        );

        try {
            setIsLoading(true);
            const res = await fetch(`/rmg-templates/resources/templates/${selectedCompany}/${selectedTemplate}.json`);
            const data = await res.text();
            channelRef.current?.postMessage({
                event: 'IMPORT',
                meta: { selectedCompany, selectedTemplate },
                data,
            });
            rmgRuntime.event(Events.APP_CLIP_VIEW_IMPORT, { parentComponent });
        } catch (e) {
            setIsError(true);
        } finally {
            setIsLoading(false);
            setSelectedTemplate(undefined);
        }
    };

    const handleClose = () => {
        console.log(`[${channelRef.current?.name}] Emitting CLOSE event`);
        channelRef.current?.postMessage({
            event: 'CLOSE',
        });
        rmgRuntime.event(Events.APP_CLIP_VIEW_CLOSED, { parentComponent });

        setSelectedTemplate(undefined);
        setIsError(false);
    };

    return (
        <>
            <RmgPage>
                {isLoading && <RmgLoader isIndeterminate />}
                {isError && (
                    <Alert status="error" variant="solid" size="xs" pl={3} pr={1} py={1}>
                        <AlertIcon />
                        {t('Unable to import selected template.')}
                    </Alert>
                )}
                <PageHeader />
                <TemplatesGrid selectedTemplate={selectedTemplate} onTemplateSelect={setSelectedTemplate} />
            </RmgPage>

            <Divider />

            <HStack p={2} justifyContent="flex-end">
                <Button size="sm" onClick={handleClose}>
                    {t('Close')}
                </Button>
                <Button size="sm" colorScheme="primary" isDisabled={!selectedTemplate} onClick={handleImport}>
                    {t('Import')}
                </Button>
            </HStack>
        </>
    );
}
