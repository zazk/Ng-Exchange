import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { DataService } from '../data';
import { MyExchangePipe } from '../pipes/exchange.pipe';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [DataService, MyExchangePipe]
})
export class LandingComponent implements OnInit {

  public days;
  public value: any;
  public from: any = 1;
  public to: any;
  private formattedAmount: string = '1';
  private currencies = [];
  private currencyIndex: number;

  constructor( private currencyPipe: MyExchangePipe, public converter: DataService) {}

  public ngOnInit() {
    console.log('hello `Landing` component');
    this.from = this.currencyPipe.transform(this.from);
    this.days =  Array.from({length: 20}, (v, k) => k + 1 );
    let timer = Observable.timer(0, 1 * 10 * 1000);
    this.converter.getTestingData().subscribe( (data) => {
      console.log('DATA TESTING', data);
    });
    let obj = timer.subscribe( (t) => {
      this.converter.getData().subscribe((data) => {
          console.log('Data from Currency on Landing', data);
          this.currencyIndex = data['rates']['EUR'];
          this.convertInputCurrency();
        });

      this.converter.getMultileData().subscribe( (data) => {
          this.currencies = [];
          const rates = data['rates'];
          for ( const o of Object.keys( rates ) ){
              this.currencies.push({currency: o, rate: rates[o]});
          }
          console.log('Data from Multiple Currencies', this.currencies);
        });
    });
  }

  public convertInputCurrency() {
    console.log('Convert Input Currency', this.to, 'this.form', this.from);
    this.to = this.currencyPipe.transform( 
      ( this.from.replace(/[USD,]/g, '') * this.currencyIndex).toString() , 'EUR');
  }

}
