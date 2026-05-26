// @ts-check
import boundaries from "eslint-plugin-boundaries";
import importPlugin from "eslint-plugin-import";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import vuePlugin from "eslint-plugin-vue";

/**
 * Layer enforcement for Clean Architecture (frontend):
 *
 *   type:domain         — Pure domain: entities, value objects, domain events (no framework)
 *   type:application    — Application: use cases, ports (interfaces for APIs/storage)
 *   type:infrastructure — Infrastructure: HTTP adapters, localStorage (implements ports)
 *   type:presentation   — Presentation: view models, presenters, DTO→VM mappers
 *   type:ui             — UI: Vue 3 components, composables, pages
 *
 * Allowed dependency flow:
 *
 *   domain ← application ← infrastructure
 *                       ↓
 *                 presentation
 *                       ↓
 *              ui (also depends on application)
 *
 * ui → [presentation, application] — never infrastructure (injected at app root)
 * apps/* are composition roots: they wire everything and have no boundary restrictions.
 *
 * Cross-cutting shared packages (packages/shared/*) are excluded from
 * boundary checks and can be imported freely by any layer.
 */

/** @type {Record<string, any>} */
const tsRules = {
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-unused-vars": [
    "error",
    { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
  ],
  "@typescript-eslint/explicit-function-return-type": [
    "error",
    { allowExpressions: true, allowTypedFunctionExpressions: true },
  ],
  "@typescript-eslint/no-non-null-assertion": "error",
  "@typescript-eslint/consistent-type-imports": [
    "error",
    { prefer: "type-imports" },
  ],
  "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/await-thenable": "error",
  "@typescript-eslint/no-misused-promises": "error",
};

/** @type {Record<string, any>} */
const generalRules = {
  "no-console": ["warn", { allow: ["warn", "error"] }],
  "no-debugger": "error",
  eqeqeq: ["error", "always"],
  curly: ["error", "all"],
};

/** @type {Record<string, string[]>} */
const boundarySettings = {
  "boundaries/include": [
    "packages/*/domain/src/**",
    "packages/*/application/src/**",
    "packages/*/infrastructure/src/**",
    "packages/*/presentation/src/**",
    "packages/*/ui/src/**",
  ],
};

/** @type {Array<Record<string, any>>} */
const boundaryElements = [
  { type: "domain", pattern: "packages/*/domain/src/**", capture: ["bc"] },
  { type: "application", pattern: "packages/*/application/src/**", capture: ["bc"] },
  { type: "infrastructure", pattern: "packages/*/infrastructure/src/**", capture: ["bc"] },
  { type: "presentation", pattern: "packages/*/presentation/src/**", capture: ["bc"] },
  { type: "ui", pattern: "packages/*/ui/src/**", capture: ["bc"] },
];

/** @type {Record<string, any>} */
const boundaryRules = {
  "boundaries/element-types": [
    "error",
    {
      default: "disallow",
      rules: [
        // domain: only same-BC domain (pure, no deps)
        { from: ["domain"], allow: [["domain", { bc: "${from.bc}" }]] },
        // application: same-BC domain
        { from: ["application"], allow: [["domain", { bc: "${from.bc}" }]] },
        // infrastructure: same-BC domain + application (implements ports)
        {
          from: ["infrastructure"],
          allow: [
            ["domain", { bc: "${from.bc}" }],
            ["application", { bc: "${from.bc}" }],
          ],
        },
        // presentation: same-BC domain + application (maps DTOs → view models)
        {
          from: ["presentation"],
          allow: [
            ["domain", { bc: "${from.bc}" }],
            ["application", { bc: "${from.bc}" }],
          ],
        },
        // ui: same-BC application + presentation (NOT infrastructure)
        {
          from: ["ui"],
          allow: [
            ["application", { bc: "${from.bc}" }],
            ["presentation", { bc: "${from.bc}" }],
          ],
        },
      ],
    },
  ],
  "boundaries/no-unknown": "off",
  "boundaries/no-unknown-files": "off",
};

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: ["node_modules/**", "dist/**", ".nx/**", "coverage/**", "tmp/**"],
  },

  // ── TypeScript files in packages (boundary-checked) ───────────────────────
  {
    files: ["packages/*/*/src/**/*.ts"],
    plugins: {
      "@typescript-eslint": /** @type {any} */ (tsPlugin),
      boundaries,
      import: /** @type {any} */ (importPlugin),
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.base.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      ...boundarySettings,
      "boundaries/elements": boundaryElements,
    },
    rules: {
      ...tsRules,
      ...generalRules,
      ...boundaryRules,
      "import/no-extraneous-dependencies": [
        "error",
        { devDependencies: false, optionalDependencies: false, peerDependencies: true },
      ],
    },
  },

  // ── Vue files in packages/*/ui and apps ───────────────────────────────────
  .../** @type {any[]} */ (vuePlugin.configs["flat/recommended"]).map(
    (/** @type {any} */ cfg) => ({
      ...cfg,
      files: ["packages/*/ui/src/**/*.vue", "apps/**/*.vue"],
    }),
  ),
  {
    files: ["packages/*/ui/src/**/*.vue", "apps/**/*.vue"],
    plugins: {
      "@typescript-eslint": /** @type {any} */ (tsPlugin),
      boundaries,
      import: /** @type {any} */ (importPlugin),
    },
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".vue"],
        project: "./tsconfig.base.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      ...boundarySettings,
      "boundaries/elements": boundaryElements,
    },
    rules: {
      ...generalRules,
      ...boundaryRules,
      "vue/multi-word-component-names": "error",
      "vue/component-api-style": ["error", ["script-setup"]],
      "vue/define-macros-order": [
        "error",
        { order: ["defineOptions", "defineProps", "defineEmits", "defineSlots"] },
      ],
    },
  },

  // ── TypeScript files in apps (composition roots, no boundary checks) ──────
  {
    files: ["apps/**/*.ts"],
    ignores: ["apps/e2e/**"],
    plugins: {
      "@typescript-eslint": /** @type {any} */ (tsPlugin),
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.base.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...tsRules,
      ...generalRules,
    },
  },

  // ── Playwright e2e tests ──────────────────────────────────────────────────
  {
    files: ["apps/e2e/**/*.ts"],
    plugins: {
      "@typescript-eslint": /** @type {any} */ (tsPlugin),
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      ...generalRules,
      "no-console": "off",
    },
  },

  // ── Test files (relax some strict rules) ─────────────────────────────────
  {
    files: ["**/*.spec.ts", "**/*.spec.vue", "**/*.test.ts"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "import/no-extraneous-dependencies": "off",
    },
  },
];

export default config;
