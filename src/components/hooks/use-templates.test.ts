import { renderHook } from '../../test-utils';
import rootReducer, { RootStore } from '../../redux';
import { createTestStore } from '../../setupTests';
import useTemplates, { IUseTemplates } from './use-templates';
import { act, RenderHookResult } from '@testing-library/react';

const realStore = rootReducer.getState();
let mockStore: RootStore;

const originalFetch = global.fetch;
const mockFetch = vi.fn();

describe('useTempaltes', () => {
    beforeEach(() => {
        mockStore = createTestStore({
            app: { ...realStore.app, templateList: { mtr: [{ filename: 'twl', name: {} }] } },
        });
    });

    afterEach(() => {
        global.fetch = originalFetch;
        mockFetch.mockClear();
    });

    it('Can read templates from cached list', () => {
        global.fetch = mockFetch;

        const { result } = renderHook(() => useTemplates('mtr'), { store: mockStore });

        expect(mockFetch).not.toBeCalled();

        const { templates } = result.current;
        expect(templates).toHaveLength(1);
        expect(templates).toContainEqual(expect.objectContaining({ filename: 'twl' }));
    });

    it('Can fetch templates from remote and add to cache', async () => {
        global.fetch = mockFetch.mockResolvedValue({ json: () => Promise.resolve([{ filename: 'gf', name: {} }]) });

        let renderHookResult: RenderHookResult<IUseTemplates, any>;
        await act(async () => {
            renderHookResult = renderHook(() => useTemplates('fmetro'), { store: mockStore });
        });

        // fetch from remote
        expect(mockFetch).toBeCalledTimes(1);
        expect(mockFetch).lastCalledWith(expect.stringContaining('/fmetro/00config.json'));

        // receive result

        const { templates } = renderHookResult!.result.current;
        expect(templates).toHaveLength(1);
        expect(templates).toContainEqual(expect.objectContaining({ filename: 'gf' }));

        // add to cache
        expect(mockStore.getState().app.templateList).toHaveProperty('fmetro', expect.any(Array));
    });
});
