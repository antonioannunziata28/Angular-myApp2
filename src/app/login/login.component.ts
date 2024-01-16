import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../assets/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  username = "";
  password = "";
  errMsg = "";

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit(): void {
      
  }

  login() {
    if(this.username.trim().length === 0){
      this.errMsg = "Username is required";
    } else if(this.password.trim().length === 0){
      this.errMsg = "Password is required";
    } else {
      this.errMsg = "";
      let res = this.auth.login(this.username, this.password);
      if(res === 200) {
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.errMsg = 'Invalid Credentials'
      }

    }
  }
}
