# gom

## Development

Install json-server

```bash
    yarn global json-server
    cargo install wasm-pack
```

## VSCode Editor intergration

- install Prettier and ESLint extensions.
- Add all of them below to vscode user settings

```json
"editor.formatOnSave": true,
"files.autoSave": "onFocusChange",
"[javascript]": {
	"editor.formatOnSave": false
},
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true,
"prettier.disableLanguages": ["js"]
```
