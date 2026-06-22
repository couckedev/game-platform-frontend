import {
  createVuePlayerModule,
  PlayerModule,
} from '@player/infrastructure/vue';
import type { App } from 'vue';

export async function bootstrapApp(app: App) {
  app.provide(PlayerModule, createVuePlayerModule());
}
