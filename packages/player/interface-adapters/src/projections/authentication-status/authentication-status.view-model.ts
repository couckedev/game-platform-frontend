export type AuthenticationStatusViewModel =
  | {
      isLoading: true;
    }
  | {
      isAuthenticated: false;
    }
  | {
      isAuthenticated: true;
      isRegistered: boolean;
    };
