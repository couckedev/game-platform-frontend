export interface SharedModuleConfig {
  keycloak: {
    readonly url: string;
    readonly realm: string;
    readonly clientId: string;
  };
}
