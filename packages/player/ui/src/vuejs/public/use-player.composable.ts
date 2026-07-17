import { registerPlayerModule } from '@/vuejs/composition/index.js';
import { useAuthenticationStatusReader } from '@/vuejs/stores/index.js';
import type { UsePlayerResult } from './use-player-result.interface.js';

export function usePlayer(): UsePlayerResult {
  const authenticationStatus = useAuthenticationStatusReader();
  const result = {
    register: registerPlayerModule,
    authenticationStatus,
  };

  return result;
}
