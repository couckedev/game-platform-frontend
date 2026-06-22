export interface ObservableValue<Value> {
  get(): Value;
  subscribe(listener: () => void): () => void;
}
