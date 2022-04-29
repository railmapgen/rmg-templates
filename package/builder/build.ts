// node --loader ts-node/esm .\builder\build.ts

import path from 'path';
import {fileURLToPath} from 'url';
import {readFile, mkdir,writeFile} from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sourcePath = path.join(__dirname, '../../public/resources/templates/basic');
const targetPath = path.join(__dirname, '../lib/templates/basic');

const getTemplateIdList = () => {
    return ['default', 'coline'];
}

const copyTemplates = async () => {
    for (const id of getTemplateIdList()) {
        const templateJson = await readFile(path.join(sourcePath, id + '.json'), 'utf-8');
        await writeFile(path.join(targetPath, id+'.json'), templateJson);
    }
}

const build = async () => {
    await mkdir(targetPath, {recursive: true});
    await copyTemplates();
}

build().then();