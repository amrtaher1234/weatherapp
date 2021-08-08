import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { TempratureTypes } from '../../shared/models';

import { ConfigService } from './config.service';
import { CountriesService } from './countries.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountriesService],
    });
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should config$ subject initialized with default data', (done: DoneFn) => {
    service.config.subscribe((data) => {
      expect(data.selectedCountryIds).toEqual(
        environment.DEFAULT_COUNTRIES_IDS
      );
      expect(data.tempratureType).toBe(TempratureTypes.Kelvin);
      done();
    });
  });

  it('should set temprature type and subject should return new value', (done: DoneFn) => {
    service.setTempratureType(TempratureTypes.Celsius);
    service.config.subscribe((data) => {
      expect(data.tempratureType).toBe(TempratureTypes.Celsius);
      done();
    });
  });
});
