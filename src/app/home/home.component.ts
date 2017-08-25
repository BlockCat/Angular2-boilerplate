import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    protected authentication: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
