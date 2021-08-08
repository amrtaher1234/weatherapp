import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Config, TempratureTypes } from '../../shared/models';
import { CountriesService } from './countries.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private reloadRequests$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);
  private config$: BehaviorSubject<Config> = new BehaviorSubject<Config>({
    tempratureType: TempratureTypes.Kelvin,
    selectedCountryIds: this.countriesService.getCountriesIds(),
  });
  constructor(private countriesService: CountriesService) {}

  get config(): Observable<Config> {
    return this.config$.asObservable();
  }
  setTempratureType(tempratureType: TempratureTypes) {
    this.config$.next({
      ...this.config$.value,
      tempratureType,
    });
  }
  reloadPages() {
    this.reloadRequests$.next(true);
  }
  get reloadRequests() {
    return this.reloadRequests$.asObservable();
  }
}
