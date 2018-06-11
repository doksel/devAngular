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
    this.count++;
  }

  loadMore(): void {
    this.getUsers(this.count);
  }

}
