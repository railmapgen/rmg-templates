import path from 'path';
import { fileURLToPath } from 'url';
import { opendir, readFile, writeFile } from 'fs/promises';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sourcePath = path.join(__dirname, '../public/resources');

const patch = async () => {
    const dir = await opendir(path.join(sourcePath, 'templates'));
    for await (const company of dir) {
        const configPath = path.join(dir.path, company.name, '00config.json');
        const config = JSON.parse(await readFile(configPath, 'utf8'));
        for (const i in config) {
            const { filename, uploadBy, authors } = config[i];
            const filePath = path.join(dir.path, company.name, filename);
            console.log(`Patching ${filePath}`);
            const result = String(execSync(`git log --pretty="format:%an" "${filePath}.json"`))
                .split('\n')
                .concat(authors?.toReversed() ?? [])
                .concat(uploadBy)
                .toReversed()
                .filter(author => !!author && author !== 'github-actions[bot]')
                .map(author => (author === 'Chito Wong' ? 'wongchito' : author))
                .reduce<string[]>((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), []);
            console.log(result);
            config[i].authors = result;
            if (uploadBy !== undefined) {
                delete config[i].uploadBy;
            }
        }
        await writeFile(configPath, JSON.stringify(config, null, 4));
    }
};

patch().then();
