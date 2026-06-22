import { createPlayerModule, type PlayerModule } from '../../composition';

export function createPlayerTestingModule(): PlayerModule {
  return createPlayerModule();
}
