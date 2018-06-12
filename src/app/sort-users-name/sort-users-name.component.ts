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

  // -------- получаем список с lodash ---------
  getUsers(count): void {
    this.userService.getUsers()
    .subscribe(users => this.users = _.slice(users,0, count))
  }

  // -------- получаем список без lodash ---------
  // getUsers(count): void {
  //   this.userService.getUsers()
  //   .subscribe(users => this.users = users.slice(0, count));
  // }

  loadMore(): void {
    this.count++;
    this.getUsers(this.count);
  }

  // -------- сортировка с lodash ---------
  sortByNameASC(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = _.slice(users,0, this.count)
      .sort((a, b) => a.firstName.toLowerCase() !== b.firstName.toLowerCase() ?
        a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1 : 0))
    );
  }

  // -------- сортировка без lodash ---------
  // sortByNameASC(): void {
  //   this.userService.getUsers()
  //   .subscribe(users => this.users = users.slice(0, this.count)
  //     .sort((a, b) => a.firstName.toLowerCase() !== b.firstName.toLowerCase() ?
  //       a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1 : 0)
  //   );
  // }

  // -------- сортировка с lodash ---------
  sortByNameDESC(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = _.reverse(_.slice(users,0, this.count)
      .sort((a, b) => a.firstName.toLowerCase() !== b.firstName.toLowerCase() ?
        a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1 : 0))
    );
  }

  // -------- сортировка без lodash ---------
  // sortByNameDESC(): void {
  //   this.userService.getUsers()
  //   .subscribe(users => this.users = users.slice(0, this.count)
  //     .sort((a, b) => a.firstName.toLowerCase() !== b.firstName.toLowerCase() ?
  //       a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1 : 0)
  //     .reverse()
  //   );
  // }

}
