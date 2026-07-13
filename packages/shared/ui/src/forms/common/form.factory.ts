import type { Form } from './form.interface.js';
import type { FormOptions } from './form-options.interface.js';

export interface FormFactory {
  create<FormValues extends Record<string, unknown>, ValidationSchema>(
    options: FormOptions<FormValues, ValidationSchema>,
  ): Form<FormValues>;
}
