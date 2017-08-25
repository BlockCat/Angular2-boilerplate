import {ActionReducer, reducer} from '../decorators/reducer.decorator';

export interface AuthenticationState {
  isLoggedIn: boolean;
  token: string;
}

export enum Actions {
  'LOG_IN',
  'LOG_OUT'
}

export class AuthenticationActions extends ActionReducer<AuthenticationState> {

  @reducer(Actions.LOG_IN)
  logIn(state, action): AuthenticationState {
    return {...state, isLoggedIn: true, token: action.payload.token};
  }

  @reducer(Actions.LOG_OUT)
  logOut(state): AuthenticationState {
    return {...state, isLoggedIn: false};
  }

  getStartingState(): AuthenticationState {
    return {
      isLoggedIn: false,
      token: ''
    };
  }
}
