export type PlayerAuthenticationViewModel =
  | {
      status: 'AUTHENTICATED';
      playerNickname: string;
    }
  | {
      status: 'REGISTRATION_REQUESTED';
    };
