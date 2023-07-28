import { SystemStyleObject } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { RmgAppClip } from '@railmapgen/rmg-components';

const CHANNEL_PREFIX = 'rmg-bridge--';

const styles: SystemStyleObject = {
    h: 500,
    maxH: '70%',

    '& iframe': {
        h: '100%',
        w: '100%',
    },
};

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
        <RmgAppClip isOpen={!!templateId} onClose={onClose} sx={styles}>
            <iframe src={frameUrl} loading="lazy" />
        </RmgAppClip>
    );
}
