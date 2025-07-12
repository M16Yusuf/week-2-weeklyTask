import globals from "globals";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin';


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser },
  plugins: {
    "@stylistic": stylistic,
  },
  rules: {
    "prefer-const": "warn",
    "@stylistic/semi": "warn",
  }
},
  { files: ["**/*.json"], plugins: { json }, language: "json/json" },
]);
