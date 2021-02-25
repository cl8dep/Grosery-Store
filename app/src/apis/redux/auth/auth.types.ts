
import AccountStatus from '../../bussines/AccountStatus';
import { AccountRole } from '../../bussines/AccountRole';

enum AuthActionTypes  {
  SET_AUTH_DATA = "SET_AUTH_DATA",
  SIGN_OUT = "SIGN_OUT",
  REFRESH_AUTH_STATE = "REFRESH_AUTH_STATE",
}


export interface AuthState {
  auth: {
    access_token: string | undefined,
    account: {
      firstName: string | undefined,
      lastName: string | undefined,
      email: string | undefined,
      role: AccountRole | undefined,
      status: AccountStatus | undefined,
      cellphone: string | undefined,
      address: string | undefined,
    } | undefined
  } | undefined
}

export default AuthActionTypes;
