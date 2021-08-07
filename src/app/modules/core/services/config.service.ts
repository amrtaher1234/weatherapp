import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config, TempratureTypes } from '../../shared/models';
import { CountriesService } from './countries.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config$: BehaviorSubject<Config> = new BehaviorSubject<Config>({
    tempratureType: TempratureTypes.Kelvin,
    selectedCountryIds: this.countriesService.getCountriesIds(),
  });
  constructor(private countriesService: CountriesService) {}

  get config(): Observable<Config> {
    return this.config$.asObservable();
  }
  setConfig(data: Config) {
    this.config$.next(data);
  }
  setTempratureType(tempratureType: TempratureTypes) {
    this.config$.next({
      ...this.config$.value,
      tempratureType,
    });
  }
}
