import { PlayerAuthenticationPresenter } from "player-interface-adapters/presenters";
import { usePlayerAuthenticationStore } from "../stores/player-authentication.store";
import type { PlayerModule } from "./player-module.interface";
import { PiniaViewModelPublisher } from "shared-infrastructure";
import { AuthenticatePlayerController } from "player-interface-adapters/controllers";
import { AuthenticatePlayerUseCase } from "player-application/use-cases";
import { AxiosPlayerRepository } from "player-infrastructure/adapters";
import type { AxiosInstance } from "axios";

export function createPlayerModule(playerApi: AxiosInstance): PlayerModule {
  const authenticationStore = usePlayerAuthenticationStore();
  const playerAuthenticationViewModelPublisher = new PiniaViewModelPublisher(
    authenticationStore,
  );
  const playerAuthenticationPresenter = new PlayerAuthenticationPresenter(
    playerAuthenticationViewModelPublisher,
  );
  const playerRepository = new AxiosPlayerRepository(playerApi);
  const authenticatePlayerUseCase = new AuthenticatePlayerUseCase(playerRepository, playerAuthenticationPresenter);
  const authenticatePlayerController = new AuthenticatePlayerController(
    authenticatePlayerUseCase,
  );

  return {
    authenticationStore,
    authenticatePlayerController,
  };
}
