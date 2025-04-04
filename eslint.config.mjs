import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["node_modules/*"]
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      // Disable the original no-unused-vars
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      // Enable auto-fix for unused imports and variables
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        { 
          "vars": "all", 
          "varsIgnorePattern": "^_",
          "args": "after-used", 
          "argsIgnorePattern": "^_" 
        }
      ],
      // Auto-fixable rules
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"]
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  }
];

export default eslintConfig;
