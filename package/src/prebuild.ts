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
    console.log('Copying company ID list...');

    // read source file
    const companyConfig = await readFile(path.join(sourcePath, 'company-config.json'), 'utf-8');

    // copy to target dir
    await mkdir(targetPath, { recursive: true });
    await writeFile(path.join(targetPath, 'company-config.json'), companyConfig);
};

const createTemplateConfigsFile = async (): Promise<Record<string, TemplateEntry[]>> => {
    console.log('Creating template configs file...');

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
    console.log(`Copying template... company=${companyId}, filename=${filename}`);

    // read source file
    const templateStr = await readFile(path.join(sourcePath, companyId, filename + '.json'), 'utf-8');

    // copy to target dir
    await mkdir(path.join(distTargetPath, companyId), { recursive: true });
    await writeFile(path.join(distTargetPath, companyId, filename + '.json'), templateStr);
};

const writePackageJson = async () => {
    console.log('Writing package.json for dist...');

    // read source file
    const packageJsonStr = await readFile(path.join(__dirname, '..', 'package.json'), 'utf-8');
    const { type: _, ...others } = JSON.parse(packageJsonStr);

    await mkdir(path.join(distTargetPath), { recursive: true });
    await writeFile(path.join(distTargetPath, '..', 'package.json'), JSON.stringify(others));
};

const prebuild = async () => {
    await copyCompanyIdList();
    const templateConfigs = await createTemplateConfigsFile();

    for (let [companyId, templateList] of Object.entries(templateConfigs)) {
        for (let template of templateList) {
            await copyTemplate(companyId, template.filename);
        }
    }

    await writePackageJson();
};

prebuild().then();
