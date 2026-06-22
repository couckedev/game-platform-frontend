import {
  RegisterPlayerController,
  RegisterPlayerPresenter,
  RegisterPlayerUseCase,
} from '@player/interface-adapters/features/register-player';
import type { PlayerModule } from './player-module.interface';

export function createPlayerModule(): PlayerModule {
  const registerPlayerPresenter = new RegisterPlayerPresenter();

  const registerPlayer = async (nickname: string) => {
    const registerPlayerUseCase = new RegisterPlayerUseCase(
      registerPlayerPresenter,
    );
    const registerPlayerController = new RegisterPlayerController(
      registerPlayerUseCase,
    );
    await registerPlayerController.handle({ nickname });
  };

  return {
    registerPlayer,
    getPlayerRegistration: () =>
      registerPlayerPresenter.getPlayerRegistration(),
  };
}
