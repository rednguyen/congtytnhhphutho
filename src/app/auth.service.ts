import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn (){
    var username = sessionStorage.getItem("username");
    var password = sessionStorage.getItem("password");
    return (username == "admin") && (password == "abc123");
  }
}
