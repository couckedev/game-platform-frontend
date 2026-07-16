import { registerPlayerModule } from '@/vuejs/composition/index.js';
import { useAuthenticationStatusStore } from '@/vuejs/stores/index.js';
import type { UsePlayerResult } from './use-player-result.interface.js';

export function usePlayer(): UsePlayerResult {
  const authenticationStatus = useAuthenticationStatusStore();
  const result = {
    register: registerPlayerModule,
    authenticationStatus: authenticationStatus.viewModel,
  };

  return result;
}
