export type AuthenticatePlayerOutputData =
  | {
      status: 'AUTHENTICATED';
      currentPlayer: {
        nickname: string;
        playerId: string;
      };
    }
  | {
      status: 'UNAUTHENTICATED';
      currentPlayer: null;
    }
  | {
      status: 'NOT_REGISTERED';
      currentPlayer: null;
    };
