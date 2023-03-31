import { renderHook } from '../../test-utils';
import rootReducer from '../../redux';
import { createMockRootStore } from '../../setupTests';
import useTemplates, { IUseTemplates } from './use-templates';
import { vi } from 'vitest';
import { act, RenderHookResult } from '@testing-library/react';

const realStore = rootReducer.getState();
const mockStore = createMockRootStore({
    ...realStore,
    app: { ...realStore.app, templateList: { mtr: [{ filename: 'twl', name: {} }] } },
});

const originalFetch = global.fetch;
const mockFetch = vi.fn();

describe('useTempaltes', () => {
    afterEach(() => {
        global.fetch = originalFetch;
        mockStore.clearActions();
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
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { templates } = renderHookResult!.result.current;
        expect(templates).toHaveLength(1);
        expect(templates).toContainEqual(expect.objectContaining({ filename: 'gf' }));

        // add to cache
        const actions = mockStore.getActions();
        expect(actions).toHaveLength(1);
        expect(actions).toContainEqual(expect.objectContaining({ type: 'app/setTemplateListByCompany' }));
    });
});
