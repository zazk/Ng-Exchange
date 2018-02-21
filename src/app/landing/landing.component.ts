import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Title } from '../home/title';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [CurrencyPipe, Title]
})
export class LandingComponent implements OnInit {

  public days;
  public value: any;
  public from: any = 1;
  public to: any;
  private formattedAmount: string = '1';
  private currencies = [];
  private currencyIndex: number;

  constructor( private currencyPipe: CurrencyPipe, public converter: Title) {}

  public ngOnInit() {
    console.log('hello `Landing` component');
    this.from = this.setCurrency(this.from);
    this.days =  Array.from({length: 20}, (v, k) => k + 1 );
    let timer = Observable.timer(0, 1 * 10 * 1000);
    let obj = timer.subscribe( (t) => {
      this.converter.getData().subscribe((data) => {
          console.log('Data from Currency on Landing', data);
          this.currencyIndex = data['rates']['EUR'];
          this.to = this.setCurrency(this.currencyIndex, 'EUR');
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

  public transformCurrency(element) {
    console.log('transformCurrency', element.target.value, this.from);
    try {
      if (typeof (element.target.value) !== 'number') {
        this.formattedAmount = this.setCurrency( this.from.replace(/[USD,]/g, '') );
      }
      element.target.value = this.formattedAmount;
      this.currencies = [];
    } catch (e) {
      console.log(e);
    }
  }

  public removeCurrency(element) {
    try {
      if (element.target.value.indexOf('USD') !== -1) {
        this.formattedAmount = this.formattedAmount.replace(/[USD,]/g, '');
        element.target.value = this.formattedAmount;
      } else {
        this.formattedAmount = '0';
      }
    } catch (e) {
      console.log(e);
    }
  }

  public convertInputCurrency() {
    console.log('Convert Input Currency', this.to, 'this.form', this.from);
    this.to = this.setCurrency( ( this.from.replace(/[USD,]/g, '') * this.currencyIndex), 'EUR');
  }

  private setCurrency(value, currency: string = 'USD') {
    return this.currencyPipe.transform(value, currency, 'code', '1.2-4');
  }
}
