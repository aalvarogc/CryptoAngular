import { Component, Input } from '@angular/core';
import { APIAccessService } from '../apiaccess.service';

@Component({
  selector: 'app-crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.css']
})
export class CryptoCardComponent {
  @Input() coin:any;

  constructor(private ApiAccessService: APIAccessService){}

  // addCoinToFavourite(coinID:string){
  //   this.ApiAccessService.saveFavouriteCoin(coinID);
  // }
}
