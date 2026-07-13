import { inject } from 'vue';
import type { Form } from '../../common/index.js';
import { FORM_KEY } from '../context/index.js';

export function useFormContext<
  TValues extends Record<string, unknown>,
>(): Form<TValues> {
  const form = inject(FORM_KEY) as Form<TValues> | undefined;
  if (form === undefined)
    throw new Error('useFormContext must be used inside FormContainer');
  return form;
}
