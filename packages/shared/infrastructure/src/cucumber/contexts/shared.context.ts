import {
  createSharedTestingModule,
  type SharedTestingModule,
} from '../modules/index.js';

export class SharedContext {
  public readonly sharedModule: SharedTestingModule;

  constructor(_sharedContext: SharedContext) {
    this.sharedModule = createSharedTestingModule();
  }

  authenticateUser(): void {
    this.sharedModule.identityProvider.setAuthenticated(true);
  }
}
