import { addRootListener, RootStore } from './index';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { SELECTED_COMPANY_KEY } from '../util/constant';
import { setSelectedCompany } from './app/app-slice';

export default async function initStore(store: RootStore) {
    store.dispatch(setSelectedCompany(rmgRuntime.storage.get(SELECTED_COMPANY_KEY) ?? ''));
    store.dispatch(
        addRootListener({
            predicate: (action, currentState, previousState) => {
                return currentState.app.selectedCompany !== previousState.app.selectedCompany;
            },
            effect: (action, listenerApi) => {
                rmgRuntime.storage.set(SELECTED_COMPANY_KEY, listenerApi.getState().app.selectedCompany);
            },
        })
    );
}
