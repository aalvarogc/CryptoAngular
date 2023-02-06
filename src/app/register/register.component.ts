import { Component } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailValue:string = '';
  passwordValue:string = '';

  constructor (public usersService: UsersServiceService){}

  normalRegister(){
    this.usersService.normalRegister(this.emailValue, this.passwordValue);
  }

  googleRegister(){
    this.usersService.googleRegister();
  }

  githubRegister(){
    this.usersService.githubRegister();
  }
}
