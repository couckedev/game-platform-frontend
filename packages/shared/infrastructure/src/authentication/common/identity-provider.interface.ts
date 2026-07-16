export interface IdentityProvider {
  isAuthenticated: boolean;
  login(options?: Record<string, unknown>): Promise<void>;
  logout(): Promise<void>;
  onAuthChange(callback: (isAuthenticated: boolean) => void): void;
}
