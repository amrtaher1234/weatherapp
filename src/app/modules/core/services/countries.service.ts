import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor() {}

  getCountriesIds = (): string[] => {
    const localStorageCountries = JSON.parse(
      localStorage.getItem('countries') as any
    );

    if (localStorageCountries && Array.isArray(localStorageCountries)) {
      return localStorageCountries;
    }
    return environment.DEFAULT_COUNTRIES_IDS;
  };
}
