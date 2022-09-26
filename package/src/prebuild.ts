// node --loader ts-node/esm .\builder\build.ts

import path from 'path';
import { fileURLToPath } from 'url';
import { readFile, mkdir, writeFile } from 'fs/promises';
import { CompanyEntry, TemplateEntry } from './index';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sourcePath = path.join(__dirname, '../../public/resources/templates');
const targetPath = path.join(__dirname, '../src/templates');
const distTargetPath = path.join(__dirname, '../dist/templates');

let companyConfig: CompanyEntry[];
let templateConfigs: Record<string, TemplateEntry[]> = {};

const copyCompanyConfig = async () => {
    console.log('Copying company ID list...');

    // read source file
    const companyConfigStr = await readFile(path.join(sourcePath, 'company-config.json'), 'utf-8');

    // copy to target dir
    await mkdir(targetPath, { recursive: true });
    await writeFile(path.join(targetPath, 'company-config.json'), companyConfigStr);

    companyConfig = JSON.parse(companyConfigStr);
};

const createTemplateConfigsFile = async () => {
    console.log('Creating template configs file...');

    for (let company of companyConfig) {
        await copyTemplates(company.id);
    }

    // write template configs
    await mkdir(targetPath, { recursive: true });
    await writeFile(path.join(targetPath, 'template-configs.json'), JSON.stringify(templateConfigs));
};

const copyTemplates = async (companyId: string) => {
    console.log(`Copying templates for company=${companyId}...`);

    // read config source file
    const configStr = await readFile(path.join(sourcePath, companyId, '_config.json'), 'utf-8');
    const templateEntries: TemplateEntry[] = JSON.parse(configStr);

    // parse template
    for (let template of templateEntries) {
        const filename = template.filename;
        console.log(`Parsing template filename=${filename}...`);

        // read source file
        const templateStr = await readFile(path.join(sourcePath, companyId, filename + '.json'), 'utf-8');
        const templateObj = JSON.parse(templateStr);
        template.style = templateObj.style;

        // copy to target dir
        await mkdir(path.join(distTargetPath, companyId), { recursive: true });
        await writeFile(path.join(distTargetPath, companyId, filename + '.json'), templateStr);
    }

    // add template config
    templateConfigs[companyId] = templateEntries;
}

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
