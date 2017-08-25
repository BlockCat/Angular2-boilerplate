import { Component } from '@angular/core';
import { config } from './config';

import { dispatch } from '@angular-redux/store';
import { reducer } from './decorators/reducer.decorator';
import {AuthenticationService} from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ AuthenticationService ]
})
export class AppComponent {
  title = config.title;
}
