import type {
  RegisterPlayerRequestModel,
  RegisterPlayerUseCase,
} from "player-application/use-cases";
import type { RegisterPlayerRequest } from "../requests";

export class PlayerController {
  constructor(
    protected readonly registerPlayerUseCase: RegisterPlayerUseCase,
  ) {}

  async handlePlayerRegistration(
    request: RegisterPlayerRequest,
    externalAccountId: string,
  ): Promise<void> {
    const requestModel: RegisterPlayerRequestModel = {
      nickname: request.nickname,
      externalAccountId,
    };
    return await this.registerPlayerUseCase.execute(requestModel);
  }
}
