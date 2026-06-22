import {
  type Command,
  type Event,
  type ICommandHandler,
  type IEventHandler,
  InMemoryCommandBus,
  InMemoryEventBus,
} from '@couckedev/cqrs-core';
import type { Resettable } from './resettable.interface.js';

export class SharedContext implements Resettable {
  public readonly commandBus: InMemoryCommandBus;
  public readonly eventBus: InMemoryEventBus;

  constructor() {
    this.commandBus = new InMemoryCommandBus();
    this.eventBus = new InMemoryEventBus();
  }

  reset(): void | Promise<void> {}
}
