import { Component, Input, OnInit } from '@angular/core';
import { CurrencyApiDataService } from '../currency-api-data.service';

@Component({
  selector: 'app-currency-value',
  templateUrl: './currency-value.component.html',
  styleUrls: ['./currency-value.component.css']
})
export class CurrencyValueComponent implements OnInit {

  constructor(private currency: CurrencyApiDataService) { }

  _baseCountry: string = '';
  @Input() set baseCountry(value: string) {
    this._baseCountry = value;
    this.convertBaseCountry(this.secondCurrency);
  }

  _secondCountry: string = '';
  @Input() set secondCountry(value: string) {
    this._secondCountry = value;
    this.convertSecondCountry(this.baseCurrency);

  }

  currencyJSON: any = [];
  baseCurrency: number = 0;
  secondCurrency: number = 0;

  convertSecondCountry(event: any) {
    this.currency.getCurrencyData(this._baseCountry).subscribe(data => {
      this.currencyJSON = data;
    });

    const value = event || 0;
    if (this.currencyJSON.rates) {
      this.secondCurrency = value * this.currencyJSON.rates[this._secondCountry]
    }
  }

  convertBaseCountry(event: any) {
    this.currency.getCurrencyData(this._secondCountry).subscribe(data => {
      this.currencyJSON = data;
    });

    const value = event || 0;
    if (this.currencyJSON.rates) {
      this.baseCurrency = value * this.currencyJSON.rates[this._baseCountry]
    }
  }

  ngOnInit(): void {
  }

}
