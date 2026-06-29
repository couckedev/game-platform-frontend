import type { ServiceIdentifier } from 'inversify';
import type { LogoutUserHandler } from '../handlers/index.js';

export const LOGOUT_USER_HANDLER = Symbol(
  'LOGOUT_USER_HANDLER',
) as ServiceIdentifier<LogoutUserHandler>;
