import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  clicked = false;
  isLoginModalActive = false;
  isLoggingIn = false;

  constructor(
    protected authentication: AuthenticationService
  ) { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.clicked = !this.clicked;
  }

  setLoginModal(active: boolean): void {
    this.isLoginModalActive = active;
  }

  login(): void {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.authentication.logIn('hallo');
      this.setLoginModal(false);
      this.isLoggingIn = false;
    }, 3000);
  }

}
