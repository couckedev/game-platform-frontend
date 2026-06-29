import type { ServiceIdentifier } from 'inversify';
import type { IdentityProvider } from '../../authentication/index.js';

export const IDENTITY_PROVIDER = Symbol(
  'IDENTITY_PROVIDER',
) as ServiceIdentifier<IdentityProvider>;
