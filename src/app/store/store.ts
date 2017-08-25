import { Action, combineReducers, ReducersMapObject } from 'redux';
import { AuthenticationActions } from '../authentication/authentication.actions';

export function rootReducer() {
  // Register
  const reducers: ReducersMapObject = {
    authentication: new AuthenticationActions().createReducers()
  };

  return combineReducers(reducers);
}
