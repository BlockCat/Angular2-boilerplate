import { Injectable } from '@angular/core';

const USERS: [{ name: string, lastName: string, age: number }] = [
  { name: 'Bob', lastName: 'Ramsay', age: 20 },
  { name: 'Carmen', lastName: 'Ramsay', age: 16 },
  { name: 'Dick', lastName: 'Ramsay', age: 24 },
  { name: 'Elise', lastName: 'Ramsay', age: 15 },
  { name: 'Fel', lastName: 'Ramsay', age: 23 },
  { name: 'Gunther', lastName: 'Ramsay', age: 5 }
];
@Injectable()
export class AppService {

  users = [];
  constructor() {
    this.users = USERS;
  }

  getUsers() {
    return this.users;
  }

}
