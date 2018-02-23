import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class DataService {

constructor( public http: HttpClient ) { }

  public getData() {
    console.log('Title#getData(): Get Data');
    return this.http.get( environment.apiHost );
  }

  public getMultileData() {
    console.log('Title#getMultipleData(): Get Multiple Data');
    return this.http.get( environment.apiHostMultiple );
  }
  public getTestingData() {
    console.log('Title#getTestingData(): Get Testing Data');
    return this.http.get('http://localhost:5001/Currency/Exchange');
  }
}
