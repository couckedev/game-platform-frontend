import { type InjectionKey, inject } from 'vue';

export function injectStrict<Type>(token: InjectionKey<Type>): Type {
  const value = inject(token);
  if (value === undefined) {
    throw new Error(
      `Injection error: ${token.toString()} has not been provided`,
    );
  }
  return value;
}
