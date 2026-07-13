export interface Field<FieldValue> {
  value: FieldValue;
  errors: readonly string[];
  change(value: FieldValue): void;
  blur(): void;
}
