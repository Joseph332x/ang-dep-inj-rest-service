import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "../models/user";
import { UserState } from "../states/user.state";

// Per dare la possibilità di poter iniettare questo servizio a partire dalla root
@Injectable({
  providedIn: 'root'
})
// sarebbe stato anche possibile inserire solo 
//@Injectable e avrebbe funzionato lo stesso

export class UserService {

  http = inject(HttpClient);
  userState=inject(UserState);

  getUser(){
    this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
    .subscribe((result) => {
      this.userState.init(result) ;

    });
          
  }



          
  }

