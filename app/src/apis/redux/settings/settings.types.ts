enum SettingsActionTypes  {
  SET_SETTINGS = "SET_SETTINGS"
}


export interface SettingsState {
  signUp?: {
    enabled: boolean,
    enabledGoogleSignUp: boolean
  }
  signIn?: {
    enabled: boolean,
    enabledGoogleSignUp: boolean
  }
}

export default SettingsActionTypes;
