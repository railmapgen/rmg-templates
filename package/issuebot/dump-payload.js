const { writeFileSync } = require('fs');
const payload = process.env.GITHUB_CONTEXT;

writeFileSync('./package/issuebot/issue.json', payload);
