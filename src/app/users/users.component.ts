import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from '../services/UsersService';
import { User } from '../model/user';
import { UserPipe } from '../pipes/UserPipe';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;

  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    console.log(JSON.stringify(this.users));
  }

}
