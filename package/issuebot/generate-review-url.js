const gitHash = process.argv[2];
const affectFilesArg = process.argv[3];
const baseUrl = 'https://raw.githubusercontent.com/railmapgen/rmg-templates/';
const templatesPath = '/public/resources/template/';
const files = affectFilesArg.split(/[()]/)[1].split(',');

console.log('REVIEW_URLS<<EOF');
files.forEach(file => {
    console.log(baseUrl + gitHash + templatesPath + file);
});
console.log('EOF');
