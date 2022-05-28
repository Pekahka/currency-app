import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject, switchMap } from 'rxjs';
import { CurrencyApiDataService } from '../currency-api-data.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor(private currency: CurrencyApiDataService) {
    this.baseCountry.subscribe(v => this.baseCountryValue = v)
    this.secondCountry.subscribe(v => this.secondCountryValue = v)
  }

  items: any = [];
  selectionItems: any = [];
  baseCountry = new BehaviorSubject('UAH');
  baseCountryValue: any;
  secondCountry = new BehaviorSubject('USD');
  secondCountryValue: any;

  countryItems = this.baseCountry.pipe(switchMap(value => {
    return this.loadCountry(value)
  }), map(value => {
    const countryRates = value.rates;
    const countries = Object.keys(countryRates);
    return countries;
  }))

  baseCountryOptions = this.countryItems.pipe(map(value => {
    return value.filter(country => country != this.secondCountry.getValue())
  }))

  secondCountryOptions = this.countryItems.pipe(map(value => {
    return value.filter(country => country != this.baseCountry.getValue())
  }))

  changeBaseCountry(event: any) {
    this.baseCountry.next(event);
  }

  changeSecondCountry(event: any) {
    this.secondCountry.next(event.target.value);
  }


  loadCountry(country: any): Observable<any> {
    return this.currency.getCurrencyData(country)
  }

  ngOnInit(): void {
  }
}
