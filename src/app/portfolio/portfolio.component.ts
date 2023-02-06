import { Component } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private UsersServiceService: UsersServiceService){}

  ngOnInit(){
    this.UsersServiceService.checkAuthState();
  }
}
