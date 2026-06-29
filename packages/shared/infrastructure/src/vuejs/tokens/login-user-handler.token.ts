import type { ServiceIdentifier } from 'inversify';
import type { LoginUserHandler } from '../handlers/index.js';

export const LOGIN_USER_HANDLER = Symbol(
  'LOGIn_USER_HANDLER',
) as ServiceIdentifier<LoginUserHandler>;
