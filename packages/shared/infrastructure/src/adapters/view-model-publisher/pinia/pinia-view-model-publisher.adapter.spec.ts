import { describe, it, expect } from "vitest";
import { PiniaViewModelPublisher } from "./pinia-view-model-publisher.adapter";
import { createPinia, defineStore, setActivePinia } from "pinia";

describe("Pinia adapter for view model publisher", () => {
  const useTestStore = defineStore("test", {
    state: () => ({ viewModel: null as { total: number } | null }),
  });

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("publish", () => {
    it("should update internal view model value", () => {
      const store = useTestStore();
      const viewModelPublisher = new PiniaViewModelPublisher(store);
      const viewModelToPublish = { total: 42 };

      viewModelPublisher.publish(viewModelToPublish);

      expect(store.viewModel).toEqual(viewModelToPublish);
    });
  });
});
