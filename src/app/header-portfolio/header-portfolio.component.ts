import { Component } from '@angular/core';
import { APIAccessService } from '../apiaccess.service';

@Component({
  selector: 'app-header-portfolio',
  templateUrl: './header-portfolio.component.html',
  styleUrls: ['./header-portfolio.component.css']
})
export class HeaderPortfolioComponent {
  page = 1;
  pageSize = 9;

  constructor(public ApiAccessService: APIAccessService){}

  addCoinToFavourite(coinID:string){
    this.ApiAccessService.guardarMoneda(coinID);
  }

  ngOnInit(){
    this.ApiAccessService.getCoins();
  }

}
