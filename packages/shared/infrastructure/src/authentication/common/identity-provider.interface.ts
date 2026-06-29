export interface IdentityProvider {
  init(): Promise<void>;
  isAuthenticated: boolean;
  login(options?: Record<string, unknown>): Promise<void>;
  logout(): Promise<void>;
}
