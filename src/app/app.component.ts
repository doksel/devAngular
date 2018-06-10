import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessagesComponent, UserService]
})
export class AppComponent {
  title = ' devAgular';
}
