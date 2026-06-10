import { keycloak } from "./keycloak";
import type { KeycloakAuthenticationReturn } from "./keycloak-authentication-return.interface";

export function useKeycloakAuthentication(): KeycloakAuthenticationReturn {
  const loginWithGoogle = async (): Promise<void> => {
    await keycloak.login({
      idpHint: "google",
    });
  };

  const loginWithDiscord = async (): Promise<void> => {
    await keycloak.login({
      idpHint: "discord",
    });
  };

  //tester flow keycloak

  const logout = async (): Promise<void> => {
    await keycloak.logout();
  };

  return {
    loginWithGoogle,
    loginWithDiscord,
    logout,
  };
}
