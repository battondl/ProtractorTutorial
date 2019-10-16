import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: User;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = new User();
   }

  ngOnInit() {
  }

  validateUser() {
    console.log("Username: " + this.user.username);
    console.log("Password: " + this.user.password);

    if(this.loginService.isValidUser(this.user)) {
      this.router.navigateByUrl('main');
    }
  }

}
