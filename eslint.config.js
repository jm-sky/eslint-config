import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'

export const eslintConfigFactory = ({ baseDirectory }) => {
  const eslintrc = new FlatCompat({
    baseDirectory,
  })

  return [
    ...eslintrc.extends('plugin:vue/vue3-recommended'),
    ...eslintrc.extends('plugin:tailwindcss/recommended'),
    ...eslintrc.extends('plugin:promise/recommended'),
    ...eslintrc.extends('plugin:n/recommended'),
    ...eslintrc.extends('plugin:import/recommended'),
    ...eslintrc.extends('plugin:import/typescript'),
    js.configs.recommended,
    {
      ignores: ["public/**/*.*"],
    },
    /**
     * General
     */
    {
      settings: {
        'import/resolver': {
          typescript: true,
          node: true,
        },
      },
      plugins: {
        '@stylistic/ts': stylisticTs,
        '@typescript-eslint': tsPlugin,
      },
      rules: {
        quotes: ['error', 'single'],
        indent: ['error', 2],
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'always-multiline'],
        'eol-last': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
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
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
    /**
     * Vue - single-file-components
     */
    {
      files: ['**/*.vue'],
      languageOptions: {
        parser: vueParser,
        parserOptions: {
          parser: tsParser,
          ecmaVersion: 'latest',
          sourceType: 'module',
          globals: globals.node,
        },
      },
      rules: {
        'vue/no-dupe-keys': 0,
        'vue/max-attributes-per-line': ["error", {
          "singleline": {
            "max": 3
          },      
          "multiline": {
            "max": 1
          }
        }],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/padding-line-between-blocks': ['error', 'always'],
      }
    },
    /**
     * TypeScript
     */
    {
      files: ['**/*.ts'],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          project: 'tsconfig.json',
          ecmaVersion: 'latest',
          tsconfigRootDir: __dirname,
        },
      },
      rules: {
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/consistent-type-exports': ['error', {
          fixMixedExportsWithInlineTypeSpecifier: true,
        }],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
        '@typescript-eslint/restrict-plus-operands': ['error', { skipCompoundAssignments: false }],
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
        '@typescript-eslint/return-await': ['error', 'always'],
      },
    },
    /**
     * Vue & TypeScript
     */
    {
      files: ['**/*.vue', '**/*.ts'],
      rules: {
        '@stylistic/ts/member-delimiter-style': ['error', {
          multiline: { delimiter: 'none' },
          singleline: { delimiter: 'comma', requireLast: false },
        }],
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/consistent-type-imports': ['error', {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports',
        }],
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/naming-convention': ['error', {
          selector: 'variableLike',
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        }],
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/no-empty-object-type': 'error',
        '@typescript-eslint/no-unsafe-function-type': 'error',
        '@typescript-eslint/no-restricted-types': ['error', {
          types: {
            String: {
              message: 'Use string instead',
              fixWith: 'string',
            },
            Boolean: {
              message: 'Use boolean instead',
              fixWith: 'boolean',
            },
            Number: {
              message: 'Use number instead',
              fixWith: 'number',
            },
            Symbol: {
              message: 'Use symbol instead',
              fixWith: 'symbol',
            },
            BigInt: {
              message: 'Use bigint instead',
              fixWith: 'bigint',
            },
          }
        }],
      }
    },
  ]
}