import { useField, useForm } from 'vee-validate';
import type { Form, FormFactory, FormOptions } from '../common/index.js';

function create<FormValues extends Record<string, unknown>, ValidationSchema>(
  options: FormOptions<FormValues, ValidationSchema>,
): Form<FormValues> {
  const { handleSubmit, resetForm } = useForm({
    initialValues: options.initialValues as Record<string, unknown>,
    validationSchema: options.validationSchema,
  });

  const onSubmit = async (e?: Event) => {
    await handleSubmit(
      options.onSubmit as (
        values: Record<string, unknown>,
      ) => void | Promise<void>,
    )(e);
  };

  const onReset = () => resetForm();

  const getField = <Key extends keyof FormValues & string>(name: Key) => {
    const { value, errors, handleChange, handleBlur } =
      useField<FormValues[Key]>(name);

    return {
      get value(): FormValues[Key] {
        return value.value;
      },
      get errors(): readonly string[] {
        return errors.value;
      },
      change: handleChange as (v: FormValues[Key]) => void,
      blur: handleBlur,
    };
  };

  return {
    submit: onSubmit,
    reset: onReset,
    getField: getField,
  };
}

export const VeeValidateFormFactory: FormFactory = { create };
