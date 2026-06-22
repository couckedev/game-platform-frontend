import { InMemoryCommandBus, InMemoryEventBus } from '@couckedev/cqrs-core';
import type { SharedModule } from './shared-module.interface.js';

export function createSharedModule(): SharedModule {
  const commandBus = new InMemoryCommandBus();
  const eventBus = new InMemoryEventBus();

  return {
    commandBus,
    eventBus,
  };
}
