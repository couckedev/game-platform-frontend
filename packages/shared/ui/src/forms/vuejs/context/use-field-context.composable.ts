import { useFormContext } from './use-form-context.composable.js';

export function useFieldContext(name: string) {
  const form = useFormContext();
  return form.getField(name);
}
