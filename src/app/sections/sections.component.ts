import { Component, Input, OnInit } from '@angular/core';
import { CurrencyApiDataService } from '../currency-api-data.service';



@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor(private currency: CurrencyApiDataService) { }



  items: any = [];

  selectionItems: any = [];

  baseCountry = "";

  secondCountry = "";




  changeBaseCountry(country: string) {

    (this.currency.getCurrencyData(this.baseCountry).subscribe(data => {
      // console.log(data)
      this.items = JSON.stringify(data);
      // console.log(this.currencyJSON)
      this.items = JSON.parse(this.items)
      // console.log(this.items)
      this.items = Object.keys(this.items.rates)
      // console.log(this.items.rates)
      // this.items = this.items.rates
      // console.log(this.secondCountry.value)





    }));

    this.baseCountry = country;
    // console.log(this.baseCountry)
  }

  changeSecondCountry(country: string) {

    (this.currency.getCurrencyData(this.baseCountry).subscribe(data => {
      // console.log(data)
      this.items = JSON.stringify(data);
      // console.log(this.currencyJSON)
      this.items = JSON.parse(this.items)
      // console.log(this.items)
      this.items = Object.keys(this.items.rates)
      // console.log(this.items.rates)
      // this.items = this.items.rates
      // console.log(this.secondCountry.value)





    }));
    this.secondCountry = country;
  }




  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.changeBaseCountry(this.baseCountry);
    this.changeSecondCountry(this.secondCountry);
  }
}
