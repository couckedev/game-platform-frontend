import {
  injectStrict,
  LOGIN_USER_HANDLER,
  SHARED_MODULE,
} from '@shared/infrastructure/vuejs';

export function useLogin() {
  const sharedModule = injectStrict(SHARED_MODULE);
  const loginUserHandler = sharedModule.get(LOGIN_USER_HANDLER);

  function login(provider: string) {
    loginUserHandler.handle(provider);
  }

  return { login };
}
