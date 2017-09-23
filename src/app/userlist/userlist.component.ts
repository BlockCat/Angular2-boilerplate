import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.sass'],
  providers: [ AppService ]
})
export class UserListComponent implements OnInit {

  users;
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.users = this.appService.getUsers();
  }

}
