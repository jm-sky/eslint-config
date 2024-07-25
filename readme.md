## eslint-config

ESlint default preset that uses Vite, Vue, TypeScript and TailwindCSS.

This package uses [ESLint configuration format](https://eslint.org/docs/latest/use/configure/configuration-files-new) and requires ESLint 8.57.

Source presets:

- [vue/vue3-recommended](https://eslint.vuejs.org/rules/)
- [tailwindcss/recommended](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- [promise/recommended](https://github.com/eslint-community/eslint-plugin-promise#rules)
- [n/recommended](https://github.com/eslint-community/eslint-plugin-n#-rules)
- [eslint.recommended](https://eslint.org/docs/latest/rules/)

### Usage
Install:

    npm install -D @jm-sky/eslint-config

Create `eslint.config.js` file in project's root directory:

```js
import eslintConfig from '@jm-sky/eslint-config'

export default [
    ...eslintConfig,
]
```

Optionally add scripts in `package.json`:

```js
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

To run the linter, use:

    npm run lint

To autmatically fix errors, use:

    npm run lint:fix


### Configuration

You can add/override rules in `eslint.config.js` file

```js
import eslintConfig from '@jm-sky/eslint-config'

export default [
  ...eslintConfig,
  {
    rules: {
      'vue/multi-word-component-names': 'error',
    }
  }
]
```
