export type CurrentPlayerViewModel =
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
      status: 'LOADING';
      currentPlayer: null;
    };
