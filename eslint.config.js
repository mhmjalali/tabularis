import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        ignores: ['dist'],
    },
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            parser: tsParser,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'react': react,
            '@typescript-eslint': tseslint,
        },
        rules: {
            ...js.configs.recommended.rules,  // Apply ESLint recommended rules
            ...tseslint.configs.recommended.rules, // Apply TypeScript recommended rules

            // React specific rules
            ...react.configs.recommended.rules,

            'indent': ['error', 4, {'SwitchCase': 1}],
            'quotes': ['error', 'single', {'avoidEscape': true}],
            'semi': ['error', 'always'],
            'no-unused-vars': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn'],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            'react/jsx-indent': ['error', 4],
            'react/jsx-indent-props': ['error', 4],
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];