import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/UsersService';
import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users :Array<User>;

  constructor(private _usersService: UsersService) {
    this.users = _usersService.getUsers();
    console.log(JSON.stringify(this.users));
   }

  ngOnInit() {
  }

}
