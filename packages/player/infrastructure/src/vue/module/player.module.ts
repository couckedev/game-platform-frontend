import { createPlayerModule, type PlayerModule } from '../../composition';

export function createVuePlayerModule(): PlayerModule {
  return createPlayerModule();
}
