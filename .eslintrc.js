module.exports = {
  parser: '@typescript-eslint/parser',
  globals: {
    'NodeJS': true
  },
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: false
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import'
  ],
  extends: [
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'next/core-web-vitals',
  ],
  rules: {
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: false }],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/ban-types': ['error', { types: { '{}': false } }],
    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter'
    }],
    '@typescript-eslint/quotes': 'error',

    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-handler-names': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: { multi: 1, single: 10 } }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-sort-props': ['error', { callbacksLast: true, shorthandFirst: true, ignoreCase: true }],
    'react/jsx-wrap-multilines': ['error', { declaration: 'parens-new-line', assignment: 'parens-new-line', return: 'parens-new-line' }],
    'max-len': [2, { code: 140, ignorePattern: '^import .*' }],
    'quote-props': 'off',
    'quotes': 'off',
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'no-unused-vars': 'warn',
    'no-multiple-empty-lines': 'error',
    'max-statements-per-line': ['error', { max: 2 }],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        'alphabetize': { order: 'asc' },
        'groups': ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index'],
        'pathGroups': [
          {
            pattern: '01-app/',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '02-pages/',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '03-widgets/',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '04-features/',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '05-entities/',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '06-shared/ui/',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '06-shared/',
            group: 'internal',
            position: 'after'
          }
        ]
      }
    ],
    'import/no-restricted-paths': [
      'error',
      {
        basePath: 'src',
        zones: [
          {
            target: '06-shared/',
            from: ['05-entities', '04-features', '03-widgets', '02-pages', '01-app'],
            message: 'Import from entities, features, widgets, pages and app is restricted'
          },
          {
            target: '05-entities',
            from: ['04-features', '03-widgets', '02-pages', '01-app'],
            message: 'Import from features, widgets, pages and app is restricted'
          },
          {
            target: '04-features/',
            from: ['03-widgets', '02-pages', '01-app'],
            message: 'Import from widgets, pages and app is restricted'
          },
          {
            target: '03-widgets/',
            from: ['02-pages', '01-app'],
            message: 'Import from pages and app is restricted'
          },
          {
            target: '02-pages/',
            from: ['01-app'],
            message: 'Import from app is restricted'
          }
        ]
      }
    ]
  },
  env: {
    jest: true
  }
}
