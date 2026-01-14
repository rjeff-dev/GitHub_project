import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser
    }
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier
])
