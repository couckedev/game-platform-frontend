/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent;

  export default component;
}

interface ImportMetaEnv {
  readonly PLAYER_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}