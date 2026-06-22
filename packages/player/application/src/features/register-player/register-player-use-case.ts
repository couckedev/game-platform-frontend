import type { RegisterPlayerInputData } from './register-player-input-data.interface';
import type { RegisterPlayerOutput } from './register-player-output.interface';

export class RegisterPlayerUseCase {
  constructor(private readonly output: RegisterPlayerOutput) {}

  async execute(input: RegisterPlayerInputData): Promise<void> {
    this.output.present({ status: 'REGISTERED' });
    return;
  }
}
