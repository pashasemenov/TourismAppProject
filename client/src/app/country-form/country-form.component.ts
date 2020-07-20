import { Component, OnInit } from '@angular/core';
import {CountryService} from "../services/country.service";
import {Country} from "../models/Country";

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent implements OnInit {

  countries: Country[];

  constructor(public service: CountryService) { }

  ngOnInit(): void {

  }

  getCountries() {
    this.service.getCounties().subscribe( (country) => {
      console.log(country);
      this.countries = country;
    })
  }
}
