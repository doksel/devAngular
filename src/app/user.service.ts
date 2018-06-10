import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private messagesService: MessagesService) { }

  getUsers(): Observable<User[]> {
    // this.messagesService.add('UserService: fetched users');
    return of(USERS);
  }
  getUser(id: number): Observable<User> {
    // this.messagesService.add(`UserService: fetched users id=${id}`);
    return of(USERS.find(user => user.id === id));
  }
}
