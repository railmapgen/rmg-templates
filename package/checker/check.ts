// node --loader ts-node/esm .\check\check.ts

import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import { assertEquals } from 'typescript-json';
import { CompanyEntry, TemplateEntry } from '../src';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(__dirname, '../../public/resources');

const companyConfig: CompanyEntry[] = [];

const checkConfigJson = async () => {
    const filesToCheck = ['core-company-config.json', 'other-company-config.json'];
    for (const file of filesToCheck) {
        const configPath = path.join(sourcePath, file);
        const configStr = await readFile(configPath, 'utf-8');
        const config = JSON.parse(configStr);
        assertEquals<CompanyEntry[]>(config);
        companyConfig.push(...config);
    }
};

const checkTemplatesByCompany = async (companyId: string) => {
    console.log('Checking templates for company', companyId);
    const templatesPath = path.join(sourcePath, 'templates', companyId);

    const configPath = path.join(templatesPath, '00config.json');
    const configStr = await readFile(configPath, 'utf-8');
    const config = JSON.parse(configStr);
    assertEquals<TemplateEntry[]>(config);

    for (const template of config as TemplateEntry[]) {
        const templatePath = path.join(templatesPath, template.filename + '.json');
        const templateStr = await readFile(templatePath, 'utf-8');
        JSON.parse(templateStr); // try json.parse
    }
};

const run = async () => {
    await checkConfigJson();
    for (const company of companyConfig) {
        await checkTemplatesByCompany(company.id);
    }
};

run().then();
