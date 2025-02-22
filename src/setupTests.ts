import { createStore } from './redux';
import crypto from 'node:crypto';
import { MockBroadcastChannel } from './mock-broadcast-channel';
import { setupTest } from '@railmapgen/mantine-components/utils';

setupTest();
export const createTestStore = createStore;

vi.stubGlobal('BroadcastChannel', MockBroadcastChannel);

const originalFetch = global.fetch;
global.fetch = vi.fn().mockImplementation((...args: any[]) => {
    if (args[0].toString().includes('/info.json')) {
        return Promise.resolve({
            ok: true,
            status: 200,
            json: () => import('../info.json').then(module => module.default),
        }) as any;
    } else {
        return originalFetch(args[0], args[1]);
    }
});

vi.stubGlobal('crypto', crypto);
