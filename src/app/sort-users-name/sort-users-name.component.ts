import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sort-users-name',
  templateUrl: './sort-users-name.component.html',
  styleUrls: ['./sort-users-name.component.scss'],
})
export class SortUsersNameComponent implements OnInit {

  users: User[] = [];
  count = 3;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers(this.count);
  }

  getUsers(count): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users.slice(0, count));
  }

  loadMore(): void {
    this.count++;
    this.getUsers(this.count);
  }

  sortByNameASC(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users.slice(0, this.count)
      .sort((a, b) => a.firstName.toLowerCase() !== b.firstName.toLowerCase() ?
        a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1 : 0)
  );
  }

  sortByNameDESC(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users.slice(0, this.count)
      .sort((a, b) => a.firstName.toLowerCase() !== b.firstName.toLowerCase() ?
        a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1 : 0)
      .reverse()
    );
  }

}
