import boundaries from "eslint-plugin-boundaries";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: ["node_modules/**", "dist/**", ".nx/**", "coverage/**", "tmp/**", "**/*.d.ts", "**/vite.config.ts"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
      "@typescript-eslint": tsPlugin,
      boundaries,
    },

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: __dirname,
      },
    },

    settings: {
      "boundaries/include": ["apps/**/*", "packages/**/*"],
      "boundaries/debug": "warn",
      "import/resolver": {
        typescript: {
          project: "./tsconfig.base.json",
          alwaysTryTypes: true, // à ajouter
        },
      },
      "boundaries/elements": [
        //
        // Shared
        //
        {
          type: "shared",
          pattern: "packages/shared/*/src/**", // supprime le /*/
          capture: [],
        },
        //
        // Bounded Contexts
        //
        {
          type: "domain",
          pattern: "packages/!(shared)/domain/src/**", // supprime le /*/
          capture: ["bc"],
        },
        {
          type: "application",
          pattern: "packages/!(shared)/application/src/**",
          capture: ["bc"],
        },
        {
          type: "interface-adapters",
          pattern: "packages/!(shared)/interface-adapters/src/**",
          capture: ["bc"],
        },
        {
          type: "infrastructure",
          pattern: "packages/!(shared)/infrastructure/src/**",
          capture: ["bc"],
        },

        //
        // Applications
        //
        {
          type: "frontend",
          mode: "folder",
          pattern: "apps/frontend",
        },
        {
          type: "acceptance-tests",
          mode: "folder",
          pattern: "apps/acceptance-tests",
        },
      ],
    },

    rules: {
      //
      // TypeScript
      //
      "@typescript-eslint/no-explicit-any": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],

      "@typescript-eslint/no-non-null-assertion": "error",

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],

      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-misused-promises": "error",

      //
      // Architecture
      //
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",

          rules: [
            {
              from: ["domain"],
              allow: ["shared", ["domain", { bc: "${from.bc}" }]],
            },

            {
              from: ["application"],
              allow: [
                "shared",
                ["domain", { bc: "${from.bc}" }],
                ["application", { bc: "${from.bc}" }],
              ],
            },

            {
              from: ["interface-adapters"],
              allow: ["shared", ["application", { bc: "${from.bc}" }]],
            },

            {
              from: ["infrastructure"],
              allow: [
                "shared",
                ["domain", { bc: "${from.bc}" }],
                ["application", { bc: "${from.bc}" }],
                ["interface-adapters", { bc: "${from.bc}" }],
              ],
            },
            {
              from: ["shared"],
              allow: ["shared"],
            },
            {
              from: ["acceptance-tests"],
              allow: [
                "shared",
                "domain",
                "application",
                "interface-adapters",
                "infrastructure",
              ],
            },
            {
              from: ["frontend"],
              allow: [
                "shared",
                "domain",
                "application",
                "interface-adapters",
                "infrastructure",
              ],
            },
          ],
        },
      ],

      "boundaries/no-unknown": "error",
      "boundaries/no-unknown-files": "warn",

      //
      // General practices
      //
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],

      "no-debugger": "error",

      eqeqeq: ["error", "always"],

      curly: ["error", "all"],
    },
  },
  {
    files: ["**/*.spec.ts", "**/*.test.ts"],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "import/no-extraneous-dependencies": "off",
    },
  },
];

export default config;
