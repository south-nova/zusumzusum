module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'react', 'import', 'prettier'],
  settings: {
    'import/ignore': ['react-native'],
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
        alwaysTryTypes: true
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    react: {
      version: 'detect'
    }
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['off', 'error', 'ignorePackages'],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'object',
          'type'
        ],
        pathGroups: [
          {
            pattern: '@_app/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@_entities/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@_screens/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@_widgets/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@_shared/**',
            group: 'internal',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'arrow-body-style': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function'
      }
    ]
  },
  ignorePatterns: [
    'node_modules/',
    'android/',
    'ios/',
    'metro.config.js',
    'babel.config.js',
    '*.config.js'
  ]
};
