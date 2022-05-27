import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiDataService {

  constructor(private http: HttpClient) { }
  getCurrencyData(baseCountry: string) {

    let url = 'https://api.exchangerate.host/latest?base=' + baseCountry;
    return this.http.get(url);
  }
}
