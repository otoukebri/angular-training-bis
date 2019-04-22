import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable()
export class UsersService {
    getUsers(){
        let usersList = new Array<User>();
        usersList.push( new User("John","Smith"));
        usersList.push( new User("Jane","Eliott"));
        return usersList;
    }
}