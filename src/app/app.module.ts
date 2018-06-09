import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';

import { AlertModule } from 'ngx-bootstrap';
import { ButtonComponent } from './button/button.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { SortListUsersComponent } from './sort-list-users/sort-list-users.component';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    ButtonComponent,
    AboutUserComponent,
    SortListUsersComponent,
    UsersComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
