import path from 'path';
import { fileURLToPath } from 'url';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { JSDOM } from 'jsdom';
import { CompanyEntry, TemplateEntry } from '../src';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesPath = path.join(__dirname, '../../public/resources/templates');

let issueUser: string;
let templateConfig: TemplateEntry[];

const readIssueBody = async (): Promise<HTMLDetailsElement[]> => {
    const issueJsonStr = await readFile(__dirname + '/issue.json', 'utf-8');
    const issueObj = JSON.parse(issueJsonStr);
    const issueBody = issueObj.event.issue.body;
    issueUser = issueObj.event.issue.user.login;

    const dom = new JSDOM(issueBody);
    return Array.from(dom.window.document.querySelectorAll('details[repo="rmg-templates"]'));
};

const parseDetailsEl = (details: HTMLDetailsElement) => {
    const company = details.getAttribute('company');
    const line = details.getAttribute('line');
    const major = details.getAttribute('major') === 'true';

    const nameEl = details.querySelector('details[type="name"]');
    const name = nameEl ? (JSON.parse(nameEl.textContent as string) as Record<string, any>) : null;

    if (!company || !line || !name) {
        throw new Error('Missing required attributes and/or data.');
    }

    const paramEl = details.querySelector('details[type="param"]');
    const param = paramEl ? (JSON.parse(paramEl.textContent as string) as Record<string, any>) : null;

    return { company, line, major, name, param };
};

const cacheTemplateConfig = async (company: string) => {
    const configPath = path.join(templatesPath, company, '_config.json');
    const configJsonStr = await readFile(configPath, 'utf-8');
    templateConfig = JSON.parse(configJsonStr) as TemplateEntry[];
};

const writeTemplateConfig = async (company: string) => {
    const configPath = path.join(templatesPath, company, '_config.json');
    await writeFile(configPath, JSON.stringify(templateConfig, null, 4));
};

const updateConfig = async (company: string, line: string, major: boolean, name: any) => {
    console.log('Updating line config', line);
    if (templateConfig.some(config => config.filename === line)) {
        templateConfig = templateConfig.map(config => {
            if (config.filename === line) {
                return { ...config, name, uploadBy: major ? issueUser : config.uploadBy };
            } else {
                return config;
            }
        });
    } else {
        templateConfig.push({ filename: line, name, uploadBy: issueUser });
    }
};

const updateCompanyConfig = async (company: string, name: Record<string, any>) => {
    console.log('Updating company config', company);
    const configPath = path.join(templatesPath, 'company-config.json');
    const configJsonStr = await readFile(configPath, 'utf-8');
    let companyConfig = JSON.parse(configJsonStr) as CompanyEntry[];

    const config: CompanyEntry = { id: company, name };
    const pinnedCompanies = ['basic', 'mtr', 'gzmtr', 'shmetro'];
    companyConfig = [...new Set(companyConfig.concat(config))].sort((a, b) => {
        if (pinnedCompanies.includes(a.id) && pinnedCompanies.includes(b.id)) {
            return 0;
        } else if (pinnedCompanies.includes(a.id)) {
            return -1;
        } else if (pinnedCompanies.includes(b.id)) {
            return 1;
        } else {
            return a.id.localeCompare(b.id);
        }
    });

    await writeFile(configPath, JSON.stringify(companyConfig, null, 4));

    // create dir for new company
    const companyPath = path.join(templatesPath, company);
    try {
        await mkdir(companyPath);

        // create empty config if dir didn't exist
        const templateConfigPath = path.join(templatesPath, company, '_config.json');
        await writeFile(templateConfigPath, JSON.stringify([], null, 4));
    } catch (err) {
        console.warn('Failed to create directory for company=' + company);
    }
};

const updateTemplate = async (company: string, line: string, param: any) => {
    console.log('Updating line', line);
    const filePath = path.join(templatesPath, company, line + '.json');
    await writeFile(filePath, JSON.stringify(param, null, 4));
};

const start = async () => {
    // parse issue
    const detailsEls = await readIssueBody();
    const items = detailsEls.map(parseDetailsEl);
    console.log('Items found:', items.length);

    // validate
    const distinctCompanies = new Set(items.map(item => item.company));
    if (distinctCompanies.size !== 1) {
        throw new Error('Cannot handle more than 1 company in an issue. Companies found: ' + distinctCompanies);
    }

    // add new company if needed
    const newCompanyConfig = items.find(item => item.line === '_config');
    if (newCompanyConfig) {
        const { company, name } = newCompanyConfig;
        await updateCompanyConfig(company, name);
    }

    // cache template config
    const targetCompany = [...distinctCompanies][0];
    console.log('Caching template config for', targetCompany);
    await cacheTemplateConfig(targetCompany);

    // perform insert/update
    await Promise.all(
        items
            .filter(item => item.line !== '_config')
            .map(async item => {
                const { line, major, name, param } = item;
                if (name) {
                    await updateConfig(targetCompany, line, major, name);
                }
                if (param) {
                    await updateTemplate(targetCompany, line, param);
                }
            })
    );

    // write updated template config
    await writeTemplateConfig(targetCompany);

    // print affected files
    const affectedFiles = items
        .filter(({ line }) => line !== '_config')
        .map(({ line }) => targetCompany + '/' + line + '.json');
    console.log(`AFFECTED_FILES=(${affectedFiles})`);
};

start().then();
