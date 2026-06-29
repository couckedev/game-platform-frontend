import type { ServiceIdentifier } from 'inversify';
import type { WatchHandle } from 'vue';

export const USER_AUTHENTICATION_WATCHER = Symbol(
  'USER_AUTHENTICATION_WATCHER',
) as ServiceIdentifier<WatchHandle>;
