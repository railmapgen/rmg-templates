// node --loader ts-node/esm .\builder\build.ts

import path from 'path';
import { fileURLToPath } from 'url';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { CompanyEntry, TemplateEntry } from './index';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sourcePath = path.join(__dirname, '../../public/resources');
const targetPath = path.join(__dirname, '../src/templates');
const distTargetPath = path.join(__dirname, '../dist/templates');

let companyConfig: CompanyEntry[];
const templateConfigs: Record<string, TemplateEntry[]> = {};

const copyCompanyConfig = async () => {
    console.log('Copying company ID list...');

    // read source file
    const companyConfigStr = await readFile(path.join(sourcePath, 'core-company-config.json'), 'utf-8');

    // copy to target dir
    await mkdir(targetPath, { recursive: true });
    await writeFile(path.join(targetPath, 'company-config.json'), companyConfigStr);

    companyConfig = JSON.parse(companyConfigStr);
};

const createTemplateConfigsFile = async () => {
    console.log('Creating template configs file...');

    for (const company of companyConfig) {
        await copyTemplateConfig(company.id);
    }

    // write template configs
    await mkdir(targetPath, { recursive: true });
    await writeFile(path.join(targetPath, 'template-configs.json'), JSON.stringify(templateConfigs));
};

const copyTemplateConfig = async (companyId: string) => {
    console.log(`Copying template config for company=${companyId}...`);

    // read config source file
    const configStr = await readFile(path.join(sourcePath, 'templates', companyId, '00config.json'), 'utf-8');
    // add template config
    templateConfigs[companyId] = JSON.parse(configStr);
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
    await copyCompanyConfig();
    await createTemplateConfigsFile();
    await writePackageJson();
};

prebuild().then();
