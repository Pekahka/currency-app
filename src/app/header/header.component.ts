import { Component, Input, OnInit } from '@angular/core';
import { CurrencyApiDataService } from '../currency-api-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private currency: CurrencyApiDataService) { }

  UACountry = 'UAH';
  currencyJSON: any = [];
  usdCurrency: number = 0;
  eurCurrency: number = 0;

  converterUSD() {
    this.currency.getCurrencyData(this.UACountry).subscribe(data => {
      this.currencyJSON = data
      this.usdCurrency = this.currencyJSON.rates.USD
    })
  }

  converterEUR() {
    this.currency.getCurrencyData(this.UACountry).subscribe(data => {
      this.currencyJSON = data;
      this.eurCurrency = this.currencyJSON.rates.EUR
    })
  }

  ngOnInit(): void {
    this.converterUSD();
    this.converterEUR();
  }





}
