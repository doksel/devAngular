import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  users: User[];
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

}
