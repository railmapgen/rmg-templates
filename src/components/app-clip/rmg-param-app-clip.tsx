import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { useRootDispatch } from '../../redux';

const CHANNEL_PREFIX = 'rmg-bridge--';

interface RmgAppClipProps {
    templateId?: string;
    onClose: () => void;
    onImport: (param: Record<string, any>) => void;
}

export default function RmgParamAppClip(props: RmgAppClipProps) {
    const { templateId, onClose, onImport } = props;

    const dispatch = useRootDispatch();

    const [appClipId] = useState(crypto.randomUUID());
    const frameUrl =
        '/rmg/import?' +
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
        <Modal isOpen={!!templateId} onClose={onClose}>
            <ModalOverlay />
            <ModalContent h={500} maxH="70%">
                <iframe src={frameUrl} loading="lazy" width="100%" height="100%" />
            </ModalContent>
        </Modal>
    );
}
