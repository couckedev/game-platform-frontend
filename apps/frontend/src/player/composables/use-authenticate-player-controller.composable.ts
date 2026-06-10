import { AuthenticatePlayerController } from "player-interface-adapters/controllers";
import { useAuthenticatePlayerUseCase } from "./use-authenticate-player-use-case.composable";

export const useAuthenticatePlayerController =
  (): AuthenticatePlayerController => {
    const useCase = useAuthenticatePlayerUseCase();
    return new AuthenticatePlayerController(useCase);
  };
