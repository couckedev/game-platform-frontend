import { describe, it, expect } from "vitest";
import { InMemoryViewModelPublisher } from "./in-memory-view-model-publisher.adapter";

describe("In memory adapter for view model publisher", () => {
  describe("publish", () => {
    it("should update internal view model value", () => {
      const viewModel = { name: "toto", age: 32 } as const;
      const viewModelPublisher = new InMemoryViewModelPublisher();

      viewModelPublisher.publish(viewModel);

      expect(viewModelPublisher.viewModel).toEqual(viewModel);
    });
  });
});
