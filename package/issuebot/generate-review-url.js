const gitHash = process.argv[2];
const affectFilesArg = process.argv[3];
const baseUrl = 'https://raw.githubusercontent.com/railmapgen/rmg-templates/';
const templatesPath = '/public/resources/templates/';
const rmgUrl = 'https://uat-railmapgen.github.io/rmg/';
const files = affectFilesArg.split(/[()]/)[1].split(',');

console.log('REVIEW_URLS<<EOF');
console.log('**Review links**');
files.forEach(file => {
    const externalUrl = baseUrl + gitHash + templatesPath + file;
    const fullUrl = `${rmgUrl}#/?external=${encodeURIComponent(externalUrl)}`;
    console.log(`[${file}](${fullUrl})`);
});
console.log('EOF');
