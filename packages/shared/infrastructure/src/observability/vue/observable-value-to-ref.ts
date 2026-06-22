import { type Ref, ref } from 'vue';
import type { ObservableValue } from '../common';

export function toRef<Value>(observableValue: ObservableValue<Value>): {
  ref: Ref<Value>;
  unsubscribe: () => void;
} {
  const value = ref(observableValue.get()) as Ref<Value>;

  const unsubscribe = observableValue.subscribe(() => {
    value.value = observableValue.get();
  });

  return {
    ref: value,
    unsubscribe,
  };
}
