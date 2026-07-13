import {
  AUTHENTICATE_PLAYER_CONTROLLER,
  CURRENT_PLAYER_STORE,
  PLAYER_MODULE,
} from '@player/infrastructure';
import {
  IDENTITY_PROVIDER,
  injectStrict,
  SHARED_MODULE,
} from '@shared/infrastructure';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

export function usePlayerAuthentication() {
  const router = useRouter();
  const sharedModule = injectStrict(SHARED_MODULE);
  const playerModule = injectStrict(PLAYER_MODULE);
  const identityProvider = sharedModule.get(IDENTITY_PROVIDER);

  const authenticatePlayerController = playerModule.get(
    AUTHENTICATE_PLAYER_CONTROLLER,
  );
  const currentPlayerStore = playerModule.get(CURRENT_PLAYER_STORE);

  const isAuthenticated = ref(identityProvider.isAuthenticated);
  identityProvider.onAuthChange((authenticated: boolean) => {
    isAuthenticated.value = authenticated;
  });
  onMounted(() => authenticatePlayerController.handle());
  watch(isAuthenticated, async () => authenticatePlayerController.handle());

  return { currentPlayerStore };
}
