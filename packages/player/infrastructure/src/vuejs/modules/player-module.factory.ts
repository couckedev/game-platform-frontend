import { AuthenticatePlayerUseCase } from '@player/application';
import {
  AuthenticatePlayerController,
  CurrentPlayerPresenter,
} from '@player/interface-adapters';
import {
  ACCESS_TOKEN_PROVIDER,
  IDENTITY_PROVIDER,
  type SharedModule,
  STORE_INSTANCE,
} from '@shared/infrastructure';
import {
  AuthenticatedHttpClient,
  AxiosHttpClient,
} from '@shared/infrastructure/http';
import axios from 'axios';
import { Container } from 'inversify';
import { HttpPlayerRepository } from '../../adapters/index.js';
import { useCurrentPlayerStore } from '../../stores/index.js';
import {
  AUTHENTICATE_PLAYER_CONTROLLER,
  CURRENT_PLAYER_STORE,
} from '../tokens/index.js';
import type { PlayerModule } from './player-module.interface.js';
import type { PlayerModuleConfig } from './player-module-config.interface.js';

export const createPlayerModule = (
  sharedModule: SharedModule,
  { playerApiBaseUrl }: PlayerModuleConfig,
): PlayerModule => {
  const container = new Container();
  const playerApiAxiosInstance = axios.create({
    baseURL: playerApiBaseUrl,
    validateStatus: (status) => status >= 200 && status < 300,
  });
  const playerApiHttpClient = new AxiosHttpClient(playerApiAxiosInstance);
  const authenticatedPlayerApiHttpClient = new AuthenticatedHttpClient(
    playerApiHttpClient,
    sharedModule.get(ACCESS_TOKEN_PROVIDER),
  );
  const playerRepository = new HttpPlayerRepository(
    authenticatedPlayerApiHttpClient,
  );
  const currentPlayerStore = useCurrentPlayerStore(
    sharedModule.get(STORE_INSTANCE),
  );
  const currentPlayerPresenter = new CurrentPlayerPresenter(currentPlayerStore);
  const authenticatePlayerUseCase = new AuthenticatePlayerUseCase(
    sharedModule.get(IDENTITY_PROVIDER),
    playerRepository,
    currentPlayerPresenter,
  );
  const authenticatePlayerController = new AuthenticatePlayerController(
    authenticatePlayerUseCase,
  );
  container
    .bind(AUTHENTICATE_PLAYER_CONTROLLER)
    .toConstantValue(authenticatePlayerController);
  container.bind(CURRENT_PLAYER_STORE).toConstantValue(currentPlayerStore);
  return container;
};
