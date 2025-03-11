import globals from "globals";
import pluginReact from "eslint-plugin-react";
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintReactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier'
import tseslint from 'typescript-eslint'



/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      react: pluginReact,
      prettier: prettierPlugin,
      'typescript-eslint': tseslint,
    },
  },
  {
    ignores: ['node_modules', 'dist']
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022,
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      semi: "error",
      'react/jsx-indent': [2, 4],
      'react/jsx-indent-props': [2, 4],
      indent: [2, 4],
      'react/jsx-filename-extension': [2, {"extensions": [".js", ".jsx",".ts", ".tsx"]}],
      'import/no-unresolved': "off",
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'warn',
      'react/require-default-props': 'off',
      'react/react-in-scope': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react//function-component-definition': 'off',
      'no-shadow': 'off',
      "react/react-in-jsx-scope": 'off',
      "import/extensions": 'off',
      'import/no-extraneous-dependencies': 'off'
    }
  }
  
];