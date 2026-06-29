import type { ServiceIdentifier } from 'inversify';
import type { AccessTokenProvider } from '../../authentication/index.js';

export const ACCESS_TOKEN_PROVIDER = Symbol(
  'ACCESS_TOKEN_PROVIDER',
) as ServiceIdentifier<AccessTokenProvider>;
