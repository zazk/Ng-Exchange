import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

constructor( public http: HttpClient ) { }

  public getData() {
    console.log('Title#getData(): Get Data');
    return this.http.get('https://api.fixer.io/latest?base=USD&symbols=EUR');
  }

  public getMultileData() {
    console.log('Title#getMultipleData(): Get Multiple Data');
    return this.http.get('https://api.fixer.io/latest?base=USD');
  }
}
