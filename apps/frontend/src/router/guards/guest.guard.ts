import { PlayerPublic } from '@player/ui/vue';
import { injectStrict, toRef } from '@shared/ui/vue';
import type { NavigationGuard } from 'vue-router';

export function guestGuard(): NavigationGuard {
  return async (_to, _from, next) => {
    const { viewModels } = injectStrict(PlayerPublic);
    const { ref: authenticationStatus } = toRef(
      viewModels.authenticationStatus,
    );
    if (
      !authenticationStatus.value.isLoading &&
      authenticationStatus.value.isAuthenticated
    )
      return next({ name: 'home' });
    next();
  };
}
