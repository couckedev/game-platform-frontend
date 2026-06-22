import { onScopeDispose } from 'vue';
import type { ObservableValue } from '../../observability/common';
import { toRef } from '../../observability/vue';

export function useObservableValue() {
  const toScopedRef = <Value>(observableValue: ObservableValue<Value>) => {
    const { ref, unsubscribe } = toRef(observableValue);

    onScopeDispose(unsubscribe);

    return ref;
  };

  return { toRef: toScopedRef };
}
