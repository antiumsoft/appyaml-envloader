const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const yaml = require('yaml');

const path = require('path');
const fs = require('fs');

// read process arg values
const argv = yargs(hideBin(process.argv)).argv._;

// read origin file name
const [origin] = argv;

if (!origin) {
    console.error("You need to specify a origin file name, if unsure try to run with the `--help` flag");
    process.exit(1);
}

if (origin.toLowerCase() === '--help') {
    const pjson = require('./package.json');
    console.log(pjson.name, pjson.version, "© 2021", pjson.author);
    console.log('How to use:');
    console.log('appyaml-envloader {origin-file}');
    console.log('eg: "appyaml-envloader app.tempalte.yaml"');
    console.log('this will generate a genuine app.yaml');
    console.log('replacing all {{ENV_VAR}} (Eg. `DB_PASS: {{CI_DB_PASSWORD}}`)');
    console.log('it internally uses basic handlebars');

    process.exit(0);
}

try {
    fs.statSync(origin);
    const file = fs.readFileSync(origin).toString('utf-8');
    console.log(file);
    process.exit(0);
} catch (e) {
    console.error("There was an error running the application", e.message);
    console.error(e);
    process.exit(2);
}