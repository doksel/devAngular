import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sort-users-date',
  templateUrl: './sort-users-date.component.html',
  styleUrls: ['./sort-users-date.component.scss'],
})
export class SortUsersDateComponent implements OnInit {

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
  sortByDateASC(){
    this.userService.getUsers()
    .subscribe(users => this.users = _.slice(users,0, this.count)
      .sort(function(a, b){return b.date.getTime() - a.date.getTime()})
    );
  }
  
  // -------- сортировка без lodash ---------
  // sortByDateASC(){
  //   this.userService.getUsers()
  //   .subscribe(users => this.users = users.slice(0, this.count)
  //     .sort(function(a, b){return b.date.getTime() - a.date.getTime()})
  //   );
  // }

  // -------- сортировка с lodash ---------
  sortByDateDESC(){
    this.userService.getUsers()
    .subscribe(users => this.users = _.reverse(_.slice(users,0, this.count)
      .sort(function(a, b){return b.date.getTime() - a.date.getTime()}))
    );
  }

  // -------- сортировка без lodash ---------
  // sortByDateDESC(){
  //   this.userService.getUsers()
  //   .subscribe(users => this.users = users.slice(0, this.count)
  //     .sort(function(a, b){return b.date.getTime() - a.date.getTime()})
  //     .reverse()
  //   );
  // }

}
