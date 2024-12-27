import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { createESLintConfig } from 'eslint-config-react-app';
import eslintPluginReact from 'eslint-plugin-react';
import eslintReactHooks from "eslint-plugin-react-hooks"




export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  
];

const config = createESLintConfig({
  extends: ['eslint-config-react-app'],

});
