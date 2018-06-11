import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent {
  title = ' devAgular';
}
