// @ts-check

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default tseslint.config(
    { ignores: ['package/dist'] },
    eslint.configs.recommended,
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts}'],
        extends: [...tseslint.configs.recommended],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        extends: [...compat.config(react.configs.recommended), ...compat.config(react.configs['jsx-runtime'])],
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        plugins: { prettier },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                },
            ],
        },
    }
);
