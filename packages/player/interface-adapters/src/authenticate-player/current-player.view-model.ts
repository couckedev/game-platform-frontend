export type CurrentPlayerViewModel =
  | {
      status: 'AUTHENTICATED';
      currentPlayer: {
        nickname: string;
        playerId: string;
      };
    }
  | {
      status: 'NOT_REGISTERED';
      currentPlayer: null;
    }
  | {
      status: 'UNAUTHENTICATED';
      currentPlayer: null;
    }
  | {
      status: 'LOADING';
      currentPlayer: null;
    };
