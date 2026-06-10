interface AuthenticatePlayerUnregisteredResponseModel {
  status: "UNREGISTERED";
}

interface AuthenticatePlayerSuccessResponseModel {
  status: "AUTHENTICATED";
  authenticatedPlayer: {
    nickname: string;
  };
}

export type AuthenticatePlayerResponseModel =
  | AuthenticatePlayerSuccessResponseModel
  | AuthenticatePlayerUnregisteredResponseModel;
