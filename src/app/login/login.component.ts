import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  constructor(private authService: AuthService, private router: Router)
  {}

  ngOnInit(): void {
      
  }

  onSubmit(): void {
    sessionStorage.setItem("username", this.userData.controls['username'].value);
    sessionStorage.setItem("password", this.userData.controls['password'].value);
    if(this.authService.isUserLoggedIn()){
      this.router.navigate(['/'])
    }
    else{
      window.alert("Wrong username or password")
      this.userData.reset();
    }
  }

}
