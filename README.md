# appyaml-envloader
CI node utility to load app yaml with CI env variables for deployment

How to use:

`appyaml-envloader {origin-file}`

example: `appyaml-envloader app.template.yaml`

this will generate a genuine app.yaml replacing all `{{ENV_VAR}}` (Eg. `DB_PASS: {{CI_DB_PASSWORD}}`)

it internally uses basic handlebars.
