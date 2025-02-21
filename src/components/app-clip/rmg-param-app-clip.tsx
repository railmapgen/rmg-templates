import { useEffect, useState } from 'react';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { Modal } from '@mantine/core';

const CHANNEL_PREFIX = 'rmg-bridge--';

interface RmgAppClipProps {
    templateId?: string;
    onClose: () => void;
    onImport: (param: Record<string, any>) => void;
}

export default function RmgParamAppClip(props: RmgAppClipProps) {
    const { templateId, onClose, onImport } = props;

    const [appClipId] = useState(crypto.randomUUID());
    const frameUrl =
        '/rmg/#/import?' +
        new URLSearchParams({
            parentComponent: rmgRuntime.getAppName(),
            parentId: appClipId,
        });

    useEffect(() => {
        const channel = new BroadcastChannel(CHANNEL_PREFIX + appClipId);
        channel.onmessage = ev => {
            const { event, data } = ev.data;
            console.log('[rmg-templates] Received event from RMG app clip:', event);
            if (event === 'CLOSE') {
                onClose();
            } else if (event === 'IMPORT') {
                onImport(data);
            }
        };

        return () => {
            channel.close();
        };
    }, [templateId]);

    return (
        <Modal.Root opened={!!templateId} onClose={onClose} keepMounted>
            <Modal.Overlay />
            <Modal.Content h={500} style={{ display: 'flex' }}>
                <iframe src={frameUrl} loading="lazy" style={{ height: '100%', width: '100%', border: 'none' }} />
            </Modal.Content>
        </Modal.Root>
    );
}
