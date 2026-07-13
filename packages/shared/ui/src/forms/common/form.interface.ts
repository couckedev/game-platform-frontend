import type { Field } from './field.interface.js';

export interface Form<FormValues extends Record<string, unknown>> {
  submit(): Promise<void> | void;
  reset(): void;
  getField<Key extends keyof FormValues & string>(
    name: Key,
  ): Field<FormValues[Key]>;
}
