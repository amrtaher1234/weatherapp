import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TempratureTypes, WeatherData } from '../../shared/models';
import { map } from 'rxjs/operators';
import { getCurrentTimeWithDifference } from '../../shared/utils';
import { CountriesService } from './countries.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private http: HttpClient,
    private countriesService: CountriesService
  ) {}

  public getCurrentWeather(): Observable<WeatherData[]> {
    const countryIds = this.countriesService.getCountriesIds();
    const params = new HttpParams().append('id', countryIds.join(','));
    return this.http.get(environment.OPEN_WEATHER_API, { params }).pipe(
      map((result: any) => {
        const { cnt, list } = result;
        return list.reduce((acc: WeatherData[], _item: any) => {
          return [
            ...acc,
            {
              temprature: _item.main.temp,
              location: {
                country: _item.name,
              },
              tempratureType: TempratureTypes.Kelvin,
              weatherMeta: {
                main: _item.weather[0].main.toLowerCase(),
                icon: _item.weather[0].icon,
                description: _item.weather[0].description,
              },
              time: getCurrentTimeWithDifference(_item.sys.timezone),
            },
          ];
        }, []) as WeatherData[];
      })
    );
  }
}
