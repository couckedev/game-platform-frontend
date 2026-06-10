export interface KeycloakAuthenticationReturn {
  loginWithGoogle: () => Promise<void>;
  loginWithDiscord: () => Promise<void>;
  logout: () => Promise<void>;
}
