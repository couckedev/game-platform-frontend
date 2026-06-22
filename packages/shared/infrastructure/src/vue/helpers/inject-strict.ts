import { type InjectionKey, inject } from 'vue';

export function injectStrict<Dependency>(
  token: InjectionKey<Dependency>,
): Dependency {
  const dependency = inject(token);
  if (dependency === undefined) {
    throw new Error(`${token.description} has to be defined before using it`);
  }
  return dependency;
}
