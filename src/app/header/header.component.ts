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

  converterUSD(country: string) {
    (this.currency.getCurrencyData(this.UACountry).subscribe(data => {
      this.currencyJSON = JSON.stringify(data);
      this.currencyJSON = JSON.parse(this.currencyJSON)

      // console.log(this.currencyJSON.rates[country]);
      this.usdCurrency = this.currencyJSON.rates[country]
    }))

  }

  converterEUR(country: string) {
    (this.currency.getCurrencyData(this.UACountry).subscribe(data => {
      this.currencyJSON = JSON.stringify(data);
      this.currencyJSON = JSON.parse(this.currencyJSON)

      // console.log(this.currencyJSON.rates[country]);
      this.eurCurrency = this.currencyJSON.rates[country]
    }))

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.converterUSD('USD');
    this.converterEUR('EUR');
  }



}
