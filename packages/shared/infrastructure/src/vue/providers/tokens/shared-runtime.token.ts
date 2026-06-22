import type { InjectionKey } from 'vue';
import type { createSharedRuntime } from '../../composition';

export const SharedRuntime = Symbol('SharedRuntime') as InjectionKey<
  ReturnType<typeof createSharedRuntime>
>;
