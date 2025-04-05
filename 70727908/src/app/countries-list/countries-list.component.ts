import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.services';
import { Country } from '../country';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
  providers: [CountriesService],
})
export class CountriesListComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((amazwe) => {
      this.countries = amazwe;
      console.log(amazwe);
    });
  }
}
