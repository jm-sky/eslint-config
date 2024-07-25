import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const eslintrc = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  {
    ignores: ["public/**/*.*"],
  },
  ...eslintrc.extends('plugin:vue/vue3-recommended'),
  ...eslintrc.extends('plugin:tailwindcss/recommended'),
  ...eslintrc.extends('plugin:promise/recommended'),
  ...eslintrc.extends('plugin:n/recommended'),
  ...eslintrc.extends('plugin:import/recommended'),
  ...eslintrc.extends('plugin:import/typescript'),
  js.configs.recommended,
  {
    rules: {
      quotes: ['error', 'single'],
      indent: ['error', 2],
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'eol-last': ['error', 'always'],
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  {
    files: ['**/*.vue', '**/*.ts'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        globals: globals.browser,
        project: true,
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs['stylistic-type-checked'].rules,
      'object-curly-spacing': ['error', 'always'],
      'vue/multi-word-component-names': 'off',
      'vue/first-attribute-linebreak': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/padding-line-between-blocks': ['error', 'always'],
      'tailwindcss/classnames-order': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'n/no-missing-import': 'off',
      'n/no-extraneous-import': 'off',
      'no-undef': 'off',
      'no-void': ['error', { allowAsStatement: true }],            
      'no-unused-vars': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/await-thenable': 'error',            
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/consistent-type-exports': ['error', {
        fixMixedExportsWithInlineTypeSpecifier: true,
      }],
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
      }],
      '@typescript-eslint/member-delimiter-style': ['error',{
        multiline: { delimiter: 'none' },
        singleline: { delimiter: 'comma', requireLast: false },
      }],
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/naming-convention': ['error', {
        selector: 'variableLike',
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      }],
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-reduce-type-parameter': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
      '@typescript-eslint/restrict-plus-operands': ['error', { skipCompoundAssignments: false }],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      'no-return-await': 'off',
      '@typescript-eslint/return-await': ['error', 'always'],
      'sort-imports': ['error', {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': true,
        'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
        'allowSeparatedGroups': false,
      }],
      'import/namespace': 0,
      'import/default': 0,
      'import/no-unresolved': 0,
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      'import/consistent-type-specifier-style': [
        'error',
        'prefer-top-level'
      ],
      'import/order': [
        'error',
        {
          'newlines-between': 'never',
          'alphabetize': {
            'order': 'asc',
            'caseInsensitive': true,
          },
          'pathGroups': [
            {
              'pattern': '@/**',
              'group': 'internal',
            },
          ],
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
        },
      ],        
    },
  },
]
