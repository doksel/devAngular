import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { SortUsersDateComponent } from './sort-users-date/sort-users-date.component';
import { SortUsersNameComponent } from './sort-users-name/sort-users-name.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { AboutUserComponent } from './about-user/about-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'sort-users-date', component: SortUsersDateComponent },
  { path: 'sort-users-name', component: SortUsersNameComponent },
  { path: 'search', component: SearchUsersComponent },
  { path: 'about-user/:id', component: SearchUsersComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
