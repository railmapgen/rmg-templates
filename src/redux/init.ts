import { RootStore } from './index';
import { CompanyEntry, TemplateEntry } from '@railmapgen/rmg-templates-resources';
import { appendCompanyAndTemplates } from './app/app-slice';

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

const fetchTemplatesByCompany = async (company: string): Promise<TemplateEntry[]> => {
    try {
        const response = await fetch('/rmg-templates/resources/templates/' + company + '/00config.json');
        const result = (await response.json()) as TemplateEntry[];

        const element = document.createElement('p');
        element.textContent = 'Fetched templates of ' + company;
        $('#root')?.append(element);

        return result;
    } catch (e) {
        console.error('Failed to fetch template list for ' + company, e);
        return [];
    }
};

const initCompanyAndTemplates = async (store: RootStore) => {
    const companyConfig = await fetchOtherCompanyConfig();
    for (const company of companyConfig) {
        const templates = await fetchTemplatesByCompany(company.id);
        store.dispatch(appendCompanyAndTemplates({ company, templates }));
    }
};

export default async function initStore(store: RootStore) {
    await initCompanyAndTemplates(store);
}
