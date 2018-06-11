import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AboutUserComponent } from './about-user/about-user.component';
import { SortUsersDateComponent } from './sort-users-date/sort-users-date.component';
import { SortUsersNameComponent } from './sort-users-name/sort-users-name.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchNameUserPipe } from './searchNameUser.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUserComponent,
    SortUsersDateComponent,
    SortUsersNameComponent,
    SearchUsersComponent,
    UsersComponent,
    SearchNameUserPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
