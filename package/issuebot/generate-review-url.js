const gitHash = process.argv[2];
const affectFilesArg = process.argv[3];
const baseUrl = 'https://raw.githubusercontent.com/railmapgen/rmg-templates/';
const templatesPath = '/public/resources/template/';
const rmgUrl = 'https://uat-railmapgen.github.io/rmg/';
const files = affectFilesArg.split(/[()]/)[1].split(',');

console.log('REVIEW_URLS<<EOF');
files.forEach(file => {
    const externalUrl = baseUrl + gitHash + templatesPath + file;
    console.log(`${rmgUrl}?external=${encodeURIComponent(externalUrl)}`);
});
console.log('EOF');
