import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor() {}

  getCountriesIds = (): string[] => {
    try {
      let localStorageCountries = JSON.parse(
        localStorage.getItem('countries') as any
      );

      if (
        localStorageCountries &&
        Array.isArray(localStorageCountries) &&
        localStorageCountries.length
      ) {
        return localStorageCountries;
      }
      return environment.DEFAULT_COUNTRIES_IDS;
    } catch (err) {
      return environment.DEFAULT_COUNTRIES_IDS;
    }
  };

  setCountriesIds = (ids: string[]) => {
    localStorage.setItem('countries', JSON.stringify(ids));
  };
}
