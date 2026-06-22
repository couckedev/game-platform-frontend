import type {
  RegisterPlayerInputData,
  RegisterPlayerUseCase,
} from '@player/application/features/register-player';
import type { RegisterPlayerRequest } from './register-player-request.interface';

export class RegisterPlayerController {
  constructor(private readonly useCase: RegisterPlayerUseCase) {}

  async handle(request: RegisterPlayerRequest): Promise<void> {
    const registerPlayerInputData: RegisterPlayerInputData = {
      nickname: request.nickname,
    };
    return this.useCase.execute(registerPlayerInputData);
  }
}
