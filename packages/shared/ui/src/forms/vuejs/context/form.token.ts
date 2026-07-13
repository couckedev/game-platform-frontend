import type { InjectionKey } from 'vue';
import type { Form } from '../../common/index.js';

export const FORM_KEY: InjectionKey<Form<Record<string, unknown>>> =
  Symbol('Form');
