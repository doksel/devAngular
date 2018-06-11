import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(USERS);
  }
  getUser(id: number): Observable<User> {
    return of(USERS.find(user => user.id === id));
  }
}
