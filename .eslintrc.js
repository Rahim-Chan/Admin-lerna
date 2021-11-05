module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    'no-use-before-define': 0,
    'no-unused-vars': 'off',
    'camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    "indent": "off",
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': ['error', {
      'argsIgnorePattern': '^_',
      'args': 'after-used',
    }],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-use-before-define': ['warn', {
      'functions': false,
      'classes': false
    }],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'standard/no-callback-literal': 0,
    'no-console': ['error', {
      allow: ['warn', 'error']
    }],
    'prefer-spread': 0,
    'prefer-rest-params': 0,
    'no-prototype-builtins': 0,
    'react/jsx-uses-vars': 'warn',
    'react/prop-types': 0,
    'react/no-find-dom-node': 0,
    'no-unused-expressions': 0,
  },
};
