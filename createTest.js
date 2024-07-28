const fs = require('fs');
const path = require('path');

const testName = process.argv[2];
if (!testName) {
    console.log('Please provide a test name.');
    process.exit(1);
}

const templatePath = path.join(__dirname, 'cypress/templates/testTemplate.js');
const newTestPath = path.join(__dirname, `cypress/e2e/${testName}.spec.js`);

fs.copyFile(templatePath, newTestPath, (err) => {
    if (err) throw err;
    console.log(`Created new test: ${newTestPath}`);
});