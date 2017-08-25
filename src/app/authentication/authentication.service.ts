import { Injectable } from '@angular/core';
import { select, dispatch } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Actions } from './authentication.actions';

@Injectable()
export class AuthenticationService {

  @select(state => state.authentication.isLoggedIn) private readonly isLoggedIn$: Observable<boolean>;

  constructor() { }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$;
  }

  @dispatch() logIn(token: string) {
    return {
      type: Actions.LOG_IN,
      payload: {
        token: token
      }
    };
  }

  @dispatch() logOut() {
    return {
      type: Actions.LOG_OUT
    };
  }

}
