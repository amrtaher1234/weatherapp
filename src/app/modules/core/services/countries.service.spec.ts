import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  const mockedCountries = ['4321233', '1212122'];
  let service: CountriesService;
  let store: any;
  beforeEach(() => {
    // mocking localstorage
    store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get default country ids when no country ids in storage', () => {
    expect(service.getCountriesIds()).toBe(environment.DEFAULT_COUNTRIES_IDS);
  });

  it('should get country ids from storage if they exist', () => {
    store.countries = JSON.stringify(mockedCountries);
    expect(service.getCountriesIds()).toEqual(mockedCountries);
  });

  it('should get default country ids if invalid data stored in storage', () => {
    store.countries = JSON.stringify({ countryIds: ['121212'] });
    expect(service.getCountriesIds()).toBe(environment.DEFAULT_COUNTRIES_IDS);
  });

  it('should set storage country ids', () => {
    service.setCountriesIds(mockedCountries);
    expect(JSON.parse(store.countries)).toEqual(mockedCountries);
  });
});
