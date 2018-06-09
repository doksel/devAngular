import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessagesComponent]
})
export class AppComponent {
  title = ' devAgular';
}
