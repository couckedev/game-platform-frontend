import type { ViewModelPublisherPort } from "shared-interface-adapters";

export class InMemoryViewModelPublisher<ViewModel> implements ViewModelPublisherPort<ViewModel> {
  private _viewModel: ViewModel | null = null;

  get viewModel(): ViewModel | null {
    return this._viewModel;
  }

  publish(viewModel: ViewModel): void {
    this._viewModel = viewModel;
  }
}
