import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-table-coin]',
  templateUrl: './table-coin.component.html',
  styleUrls: ['./table-coin.component.css']
})
export class TableCoinComponent {
  @Input() coin:any;
  public coinInfo:any;

  @Output() eventoBorrarMoneda = new EventEmitter<string>();

  constructor(){}

  eventoBorrarCoin(){
    this.eventoBorrarMoneda.emit(this.coin.coinID);    
  }
}
