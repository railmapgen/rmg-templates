// node --loader ts-node/esm .\builder\build.ts

import path from 'path';
import { fileURLToPath } from 'url';
import { readFile, mkdir, writeFile } from 'fs/promises';
import { CompanyEntry, TemplateEntry } from './index';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sourcePath = path.join(__dirname, '../../public/resources/templates');
const targetPath = path.join(__dirname, '../src/templates');
const distTargetPath = path.join(__dirname, '../dist/templates');

const copyCompanyIdList = async () => {
    // read source file
    const companyConfig = await readFile(path.join(sourcePath, 'company-config.json'), 'utf-8');

    // copy to target dir
    await mkdir(targetPath, { recursive: true });
    await writeFile(path.join(targetPath, 'company-config.json'), companyConfig);
};

const createTemplateConfigsFile = async (): Promise<Record<string, TemplateEntry[]>> => {
    // read company config
    const companyConfigStr = await readFile(path.join(sourcePath, 'company-config.json'), 'utf-8');
    const companyConfig = JSON.parse(companyConfigStr) as CompanyEntry[];

    // read config source file for each company
    const templateConfigs: Record<string, TemplateEntry[]> = {};
    for (let company of companyConfig) {
        const companyId = company.id;
        const configStr = await readFile(path.join(sourcePath, companyId, '_config.json'), 'utf-8');
        templateConfigs[companyId] = JSON.parse(configStr) as TemplateEntry[];
    }

    // write template configs
    await mkdir(targetPath, { recursive: true });
    await writeFile(path.join(targetPath, 'template-configs.json'), JSON.stringify(templateConfigs));

    return templateConfigs;
};

const copyTemplate = async (companyId: string, filename: string) => {
    // read source file
    const templateStr = await readFile(path.join(sourcePath, companyId, filename + '.json'), 'utf-8');

    // copy to target dir
    await mkdir(path.join(distTargetPath, companyId), { recursive: true });
    await writeFile(path.join(distTargetPath, companyId, filename + '.json'), templateStr);
};

const prebuild = async () => {
    await copyCompanyIdList();
    const templateConfigs = await createTemplateConfigsFile();

    for (let [companyId, templateList] of Object.entries(templateConfigs)) {
        for (let template of templateList) {
            await copyTemplate(companyId, template.filename);
        }
    }
};

prebuild().then();
