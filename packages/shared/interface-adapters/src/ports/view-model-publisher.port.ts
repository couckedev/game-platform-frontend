export interface ViewModelPublisherPort<ViewModel> {
  publish(viewModel: ViewModel): void;
}
