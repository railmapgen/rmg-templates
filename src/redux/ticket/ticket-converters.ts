import { CompanyEntry } from '@railmapgen/rmg-templates-resources';
import { Translation } from '@railmapgen/rmg-translate';

export const convertCompanyEntry = (companyEntry: CompanyEntry): HTMLDetailsElement => {
    const element = document.createElement('details');
    element.setAttribute('repo', 'rmg-templates');
    element.setAttribute('company', companyEntry.id);
    element.setAttribute('line', '_config');

    const summary = document.createElement('summary');
    summary.textContent = 'New company: ' + companyEntry.name.en;
    element.append(summary);

    element.innerText += JSON.stringify(companyEntry.name);

    return element;
};

export const convertTemplateEntry = (company: string, line: string, name: Translation, param: any) => {
    const element = document.createElement('details');
    element.setAttribute('repo', 'rmg-templates');
    element.setAttribute('company', company);
    element.setAttribute('line', line);

    const summary = document.createElement('summary');
    summary.textContent = `${company}/${line}`;
    element.append(summary);

    const nameBlock = document.createElement('details');
    nameBlock.setAttribute('type', 'name');
    nameBlock.textContent = JSON.stringify(name);
    element.append(nameBlock);

    const paramBlock = document.createElement('details');
    paramBlock.setAttribute('type', 'param');
    paramBlock.textContent = JSON.stringify(param);
    element.append(paramBlock);

    return element;
};
