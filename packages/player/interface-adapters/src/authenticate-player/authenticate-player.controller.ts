import type { CommandBus } from '@couckedev/cqrs-core/ports';
import { AuthenticatePlayerCommand } from '@player/application/commands';

export class AuthenticatePlayerController {
  constructor(private readonly commandBus: CommandBus) {}

  async handle(): Promise<void> {
    const authenticatePlayerCommand = new AuthenticatePlayerCommand();
    await this.commandBus.execute(authenticatePlayerCommand);
  }
}
