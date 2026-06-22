import type { CommandBus, EventBus } from '@couckedev/cqrs-core';

export interface SharedModule {
  commandBus: CommandBus;
  eventBus: EventBus;
}
