import type { ServiceIdentifier } from 'inversify';
import type { Pinia } from 'pinia';

export const STORE_INSTANCE = Symbol(
  'STORE_INSTANCE',
) as ServiceIdentifier<Pinia>;
