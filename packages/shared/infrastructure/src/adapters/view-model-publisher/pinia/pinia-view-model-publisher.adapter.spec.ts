import { createPinia, defineStore, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { PiniaViewModelPublisher } from './pinia-view-model-publisher.adapter.js';

describe('Pinia adapter for view model publisher', () => {
  const useTestStore = defineStore('test', {
    state: () => ({ total: 0 }),
  });

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('publish', () => {
    it('should update internal view model value', () => {
      const store = useTestStore();
      const viewModelPublisher = new PiniaViewModelPublisher(store);
      const viewModelToPublish = { total: 42 };

      viewModelPublisher.publish(viewModelToPublish);

      expect(store.total).toEqual(viewModelToPublish.total);
    });
  });
});
