import { Component } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (public usersService: UsersServiceService){}

  ngOnInit(){
    this.usersService.checkAuthState();
  }
  
  showLogedUserLinks(){
    if(this.usersService.isLogged){
      return true;
    }else{
      return false;
    }
  }

  logOut(){
    this.usersService.logOut();
  }

}
