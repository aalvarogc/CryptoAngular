import { Component } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  emailValue:string = '';
  passwordValue:string = '';

  constructor (public usersService: UsersServiceService){}

  normalLogIn(){
    this.usersService.normalLogIn(this.emailValue, this.passwordValue);
  }

  googleLogIn(){
    this.usersService.googleLogIn();
  }

  githubLogIn(){
    this.usersService.githubLogin();
  }
}
