import {
  injectStrict,
  LOGOUT_USER_HANDLER,
  SHARED_MODULE,
} from '@shared/infrastructure/vuejs';

export function useLogout() {
  const sharedModule = injectStrict(SHARED_MODULE);
  const logoutUserHandler = sharedModule.get(LOGOUT_USER_HANDLER);

  function logout() {
    logoutUserHandler.handle();
  }

  return { logout };
}
