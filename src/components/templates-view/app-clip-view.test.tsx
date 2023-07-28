import rootReducer from '../../redux';
import { createMockRootStore } from '../../setupTests';
import { render } from '../../test-utils';
import AppClipView from './app-clip-view';
import { vi } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';

const realStore = rootReducer.getState();
const mockStore = createMockRootStore({
    ...realStore,
    app: {
        ...realStore.app,
        selectedCompany: 'mtr',
    },
});

const originalFetch = global.fetch;
const mockFetch = vi.fn();

describe('AppClipView', () => {
    afterEach(() => {
        global.fetch = originalFetch;
    });

    it('Can broadcast selected template', async () => {
        mockFetch.mockResolvedValue({ json: () => Promise.resolve({ style: 'mtr' }) });
        global.fetch = mockFetch;

        render(<AppClipView />, { store: mockStore, route: '/import?parentId=test-id&parentComponent=vitest' });

        // mock broadcast channel receiver
        const messages: any[] = [];
        const receiver = new BroadcastChannel('rmg-templates-bridge--test-id');
        receiver.onmessage = message => {
            messages.push(message.data);
        };

        // select TWL
        fireEvent.click(screen.getByRole('heading', { name: 'Tsuen Wan Line' }));

        // click import
        fireEvent.click(screen.getByRole('button', { name: 'Import' }));
        expect(mockFetch).toBeCalledTimes(1);
        expect(mockFetch).toBeCalledWith(expect.stringContaining('mtr/twl.json'));

        await waitFor(() => expect(messages).toHaveLength(1));
        console.log(messages[0]);
        expect(messages).toContainEqual(expect.objectContaining({ event: 'IMPORT' }));
    });
});
