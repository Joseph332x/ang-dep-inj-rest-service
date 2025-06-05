import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './models/user';
import { CommonModule, JsonPipe } from '@angular/common';
import { UserService } from './services/userService';
import { UserState } from './states/user.state';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <div>
      <li *ngFor="let user of UserState.users ">
        {{user.id}}-{{user.name}}
      </li>
</div>
    
  `,
  styles: [],
})
export class AppComponent {
   title = 'ang-dep-inj-rest-service';
   http=inject(HttpClient);
   UserService=inject(UserService);
   UserState=inject(UserState);
   users:User[]=[];

  constructor(){
  this.UserService.getUser()
}


deleteUser(){

}
}

