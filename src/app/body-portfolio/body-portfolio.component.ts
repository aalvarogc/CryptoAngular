import { Component } from '@angular/core';
import { APIAccessService } from '../apiaccess.service';

@Component({
  selector: 'app-body-portfolio',
  templateUrl: './body-portfolio.component.html',
  styleUrls: ['./body-portfolio.component.css']
})
export class BodyPortfolioComponent {
  public coinData = new Array();

  constructor(public ApiAccessService: APIAccessService){
  }

  ngOnInit(){    
    this.ApiAccessService.setFavouritesCoinsList();  
  }

  getCoinInfo(){
    // this.ApiAccessService.favouritesCoinsList.forEach((element) => {      
    //   for(let i = 0; i < element.length; i++){
    //     this.coinData.push(this.ApiAccessService.getCoinInfo(element[i].currencyID));
    //   }
    // });
  }

  deleteFavouriteCoin(datoEvento:any){
    this.ApiAccessService.deleteFavouriteCoin(datoEvento);
  }
}
