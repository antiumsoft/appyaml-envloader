# appyaml-envloader
CI node utility to load app yaml with CI env variables for deployment

How to use:

`appyaml-envloader {origin-file} {dest-file | OPTIONAL}`

example without dest-file: `appyaml-envloader app.template.yaml`

this will generate a file app.yaml replacing all `{{ENV_VAR}}` (Eg. `DB_PASS: {{CI_DB_PASSWORD}}`)

example with dest-file: `appyaml-envloader app.template.yaml myhero.yaml`

this will generate a file named myhero.yaml replacing all `{{ENV_VAR}}` (Eg. `DB_PASS: {{CI_DB_PASSWORD}}`)

it internally uses basic handlebars.

Usage with NPX:

`npx @antiumsoft/appyaml-envloader {origin-file} {dest-file | OPTIONAL}`
