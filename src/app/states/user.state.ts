import { inject, Injectable } from "@angular/core";
import { User } from "../models/user";
import { UserService } from "../services/userService";

@Injectable({
    providedIn:"root"
})
export class UserState{
  
    users:User[]=[];


init(result:User[]){
    console.log("init()")
   this.users=result
   console.log("this.users=",this.users)

}


put(id:number){}

delete(id:number){}


}