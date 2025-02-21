import classes from './app-clip-view.module.css';
import PageHeader from './page-header';
import TemplatesGrid from './templates-grid';
import { useRootSelector } from '../../redux';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { Events } from '../../util/constant';
import { useSearchParams } from 'react-router-dom';
import { TemplateEntry } from '@railmapgen/rmg-templates-resources';
import useTranslatedName from '../hooks/use-translated-name';
import { Alert, Button, Divider, Group, LoadingOverlay } from '@mantine/core';
import { RMPage, RMPageFooter } from '@railmapgen/mantine-components';
import { MdErrorOutline } from 'react-icons/md';

const CHANNEL_PREFIX = 'rmg-templates-bridge--';

export default function AppClipView() {
    const { t } = useTranslation();
    const translateName = useTranslatedName();

    const [searchParams] = useSearchParams();
    const parentId = searchParams.get('parentId');
    const parentComponent = searchParams.get('parentComponent');

    const { selectedCompany, coreCompanyConfig, otherCompanyConfig } = useRootSelector(state => state.app);
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateEntry>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const channelRef = useRef<BroadcastChannel>(null);

    useEffect(() => {
        // channel that talks to parent (RMP import modal, RMG Templates upload modal)
        channelRef.current = new BroadcastChannel(CHANNEL_PREFIX + parentId);
        rmgRuntime.event(Events.APP_CLIP_VIEW_OPENED, { parentComponent });

        console.log(
            `[${channelRef.current?.name}] App clip connection established, parentComponent=${parentComponent}`
        );

        // reset window header margin
        const styleEl = document.createElement('style');
        styleEl.textContent = `.rmg-window__header{margin-left: unset;}`;
        document.head.appendChild(styleEl);

        return () => {
            channelRef.current?.close();
            document.head.removeChild(styleEl);
        };
    }, []);

    useEffect(() => {
        setSelectedTemplate(undefined);
    }, [selectedCompany]);

    const handleImport = async () => {
        if (!selectedTemplate) {
            return;
        }
        const { filename, name: templateName } = selectedTemplate;
        console.log(
            `[${channelRef.current?.name}] Emitting IMPORT event, company=${selectedCompany}, template=${filename}`
        );

        const companyName =
            [...coreCompanyConfig, ...otherCompanyConfig].find(company => company.id === selectedCompany)?.name ?? {};
        const displayName = translateName(companyName) + ' ' + translateName(templateName);

        try {
            setIsLoading(true);
            const res = await fetch(`/rmg-templates/resources/templates/${selectedCompany}/${filename}.json`);
            const data = await res.json();
            channelRef.current?.postMessage({
                event: 'IMPORT',
                meta: { company: selectedCompany, filename, name: displayName },
                data,
            });
            rmgRuntime.event(Events.APP_CLIP_VIEW_IMPORT, { parentComponent, company: selectedCompany, filename });
        } catch {
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
        <RMPage>
            <LoadingOverlay visible={isLoading} />
            {isError && (
                <Alert
                    variant="light"
                    color="red"
                    title={t('Error')}
                    icon={<MdErrorOutline />}
                    className={classes.alert}
                >
                    {t('Unable to import selected template.')}
                </Alert>
            )}
            <PageHeader />
            <TemplatesGrid selectedTemplate={selectedTemplate} onTemplateSelect={setSelectedTemplate} />

            <Divider />

            <RMPageFooter>
                <Group ml="auto" gap="sm">
                    <Button variant="default" size="sm" onClick={handleClose}>
                        {t('Close')}
                    </Button>
                    <Button variant="filled" size="sm" disabled={!selectedTemplate} onClick={handleImport}>
                        {t('Import')}
                    </Button>
                </Group>
            </RMPageFooter>
        </RMPage>
    );
}
