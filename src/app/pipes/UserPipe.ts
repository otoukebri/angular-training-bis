import { PipeTransform, Pipe } from '@angular/core';
import { User } from '../model/user';

@Pipe({name: 'prettyName'})
export class UserPipe implements PipeTransform {
    transform(value: User, times: number) {
        return value.firstName + ' ' + value.lastName;
    }
}
