import { RootStore } from './index';
import { CompanyEntry } from '@railmapgen/rmg-templates-resources';
import { setOtherCompanyConfig } from './app/app-slice';

const $ = document.querySelector.bind(document);

const fetchOtherCompanyConfig = async (): Promise<CompanyEntry[]> => {
    try {
        const response = await fetch('/rmg-templates/resources/other-company-config.json');
        const result = (await response.json()) as CompanyEntry[];

        const element = document.createElement('p');
        element.textContent = 'Fetched non-core company config';
        $('#root')?.append(element);

        return result;
    } catch (e) {
        console.error('Failed to fetch non-core company config', e);
        return [];
    }
};

const initCompanyConfig = async (store: RootStore) => {
    const companyConfig = await fetchOtherCompanyConfig();
    store.dispatch(setOtherCompanyConfig(companyConfig));
};

export default async function initStore(store: RootStore) {
    await initCompanyConfig(store);
}
