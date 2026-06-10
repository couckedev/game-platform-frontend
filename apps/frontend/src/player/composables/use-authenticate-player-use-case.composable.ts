import { AuthenticatePlayerUseCase } from "player-application/use-cases";
import { usePlayerAuthenticationPresenter } from "./use-player-authentication-presenter.composable";
import { usePlayerRepository } from "./use-player-repository.composable";

export const useAuthenticatePlayerUseCase = (): AuthenticatePlayerUseCase => {
  const presenter = usePlayerAuthenticationPresenter();
  const repository = usePlayerRepository();
  return new AuthenticatePlayerUseCase(repository, presenter);
};
