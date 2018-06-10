import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sort-list-users',
  templateUrl: './sort-list-users.component.html',
  styleUrls: ['./sort-list-users.component.scss'],
})
export class SortListUsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users.slice(0, 3));
  }

}
