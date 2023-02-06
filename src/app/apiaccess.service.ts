import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firestore, collectionData, collection, query, where, setDoc, deleteDoc, doc, getDocs } from '@angular/fire/firestore';
import { UsersServiceService } from './users-service.service';

@Injectable({
  providedIn: 'root'
})
export class APIAccessService {
  // COIN LIST
  public coinsList = new Array();

  // FAVOURITES COINS
  public favouritesCoinsList = new Array<any>();
  public listaFavoritas = new Array<any>();

  // SAVE COIN FIRESTORAGE
  public coinData:any;

  // COIN DETAILS
  public coinDetails:any;

  private colection = collection(this.firestore, 'favouritesCoins');
  
  constructor(private http: HttpClient, private firestore: Firestore, private UsersService: UsersServiceService) {
  }

  getCoins(){
    this.http.get('https://api.coingecko.com/api/v3/coins').subscribe(
      (data:any)=>{
        this.coinsList = data;
      }
    )
  }

  setFavouritesCoinsList(){
    collectionData(query(this.colection, where('userId', '==', this.UsersService.userID)))
    .subscribe((datos) =>{ this.favouritesCoinsList = datos;});
  }

  saveFavouriteCoin(coinID:string){
    setDoc(doc(this.firestore, 'favouritesCoins', `${coinID}-${this.UsersService.userID}`),{
      userId: this.UsersService.userID,
      coinID: coinID,
      name: this.coinData.name,
      image: this.coinData.image.large,
      symbol: this.coinData.symbol,
      price: this.coinData.market_data.current_price.eur,
      capitalization: this.coinData.market_data.market_cap.eur,
      volumen: this.coinData.market_data.total_volume.eur,
      highest_price: this.coinData.market_data.high_24h.eur,
      lowest_price: this.coinData.market_data.low_24h.eur
    })    
  }

  deleteFavouriteCoin(coinID:string){
    deleteDoc(doc(this.firestore, "favouritesCoins", `${coinID}-${this.UsersService.userID}`));  
  }

  guardarMoneda(coinID:string){
      this.http.get(`https://api.coingecko.com/api/v3/coins/${coinID}`).subscribe(
        (data:any)=>{
          this.coinData = data;
          this.saveFavouriteCoin(coinID);
        }
      )
    }

  getCoinDetails(coinID:string){
    this.http.get(`https://api.coingecko.com/api/v3/coins/${coinID}`).subscribe(
      (data:any)=>{
        this.coinDetails = data;
        console.log(data);
        
      }
    )
  }

  getHistoricalData(id: string){
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=max`);
  }
}
