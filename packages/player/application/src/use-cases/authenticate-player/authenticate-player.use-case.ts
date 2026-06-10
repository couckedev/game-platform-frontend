import { PlayerNotFoundError } from "player-domain/errors";
import { PlayerRepositoryPort } from "player-domain/ports";
import { AuthenticatePlayerResponseModel } from "./authenticate-player.response-model";
import { OutputPort } from "shared-application";

export class AuthenticatePlayerUseCase {
  constructor(
    protected readonly playerRepository: PlayerRepositoryPort,
    protected readonly output: OutputPort,
  ) {}

  async execute(): Promise<void> {
    try {
      const player = await this.playerRepository.getCurrentPlayer();
      return this.output.present({
        status: "AUTHENTICATED",
        authenticatedPlayer: {
          nickname: player.nickname,
        },
      });
    } catch (error) {
      if (error instanceof PlayerNotFoundError) {
        return this.output.present({
          status: "UNREGISTERED",
        });
      }
      throw error;
    }
  }
}
