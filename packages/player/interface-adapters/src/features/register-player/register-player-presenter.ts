import type {
  RegisterPlayerOutput,
  RegisterPlayerOutputData,
} from '@player/application/features/register-player';
import type { PlayerRegistration } from '../../view-models';

export class RegisterPlayerPresenter implements RegisterPlayerOutput {
  private _viewModel: PlayerRegistration = { status: 'NOT_REGISTERED' };

  present(outputData: RegisterPlayerOutputData) {
    this._viewModel = { status: outputData.status };
  }

  getPlayerRegistration(): PlayerRegistration {
    return this._viewModel;
  }
}
