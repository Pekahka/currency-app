import { Component, Input, OnInit } from '@angular/core';
import { CurrencyApiDataService } from '../currency-api-data.service';

@Component({
  selector: 'app-currency-value',
  templateUrl: './currency-value.component.html',
  styleUrls: ['./currency-value.component.css']
})
export class CurrencyValueComponent implements OnInit {



  constructor(private currency: CurrencyApiDataService) { }

  // currencyJson: any = [];

  // baseCountry = "UAH";

  // secondCountry = "USD";

  // result: string = "1";

  @Input() baseCountry: any;
  @Input() secondCountry: any;

  currencyJSON: any = [];

  baseCurrency: number = 1;
  secondCurrency: number = 1;

  convertSecondCountry(event: any) {

    (this.currency.getCurrencyData(this.baseCountry.value).subscribe(data => {
      // console.log(data)
      this.currencyJSON = JSON.stringify(data);
      // console.log(this.currencyJSON)
      this.currencyJSON = JSON.parse(this.currencyJSON)
      // console.log(this.currencyJSON)

      // console.log(this.secondCountry.value)

      // console.log(this.currencyJSON.rates[this.secondCountry.value]);



    }));
    // console.log(this.currencyJSON.rates[this.secondCountry.value])
    // event = event.target.value * this.currencyJSON.rates[this.secondCountry.value];
    this.secondCurrency = event.target.value * this.currencyJSON.rates[this.secondCountry.value]
  }

  convertBaseCountry(event: any) {

    (this.currency.getCurrencyData(this.secondCountry.value).subscribe(data => {
      // console.log(data)
      this.currencyJSON = JSON.stringify(data);
      // console.log(this.currencyJSON)
      this.currencyJSON = JSON.parse(this.currencyJSON)
      // console.log(this.currencyJSON)

      // console.log(this.secondCountry.value)

      // console.log(this.currencyJSON.rates[this.baseCountry.value]);



    }));
    // console.log(this.currencyJSON.rates[this.secondCountry.value])
    // event = event.target.value * this.currencyJSON.rates[this.secondCountry.value];
    this.baseCurrency = event.target.value * this.currencyJSON.rates[this.baseCountry.value]

  }


  ngOnInit(): void {
  }

}
