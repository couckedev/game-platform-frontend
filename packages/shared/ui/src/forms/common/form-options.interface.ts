export interface FormOptions<
  FormValues extends Record<string, unknown>,
  ValidationSchema,
> {
  initialValues: FormValues;
  validationSchema?: ValidationSchema | undefined;
  onSubmit?: (values: FormValues) => Promise<void> | void | undefined;
}
