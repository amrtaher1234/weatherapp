import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  TempratureTypes,
  WeatherData,
  WeatherDataResponse,
} from '../../shared/models';
import { catchError, map } from 'rxjs/operators';
import { getCurrentTimeWithDifference } from '../../shared/utils';
import { CountriesService } from './countries.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private http: HttpClient,
    private countriesService: CountriesService
  ) {}

  public getCurrentWeather(): Observable<WeatherDataResponse> {
    const countryIds = this.countriesService.getCountriesIds();
    const params = new HttpParams().append('id', countryIds.join(','));
    return this.http.get(environment.OPEN_WEATHER_API, { params }).pipe(
      map((result: any) => {
        const { cnt, list } = result;
        return {
          data: list.reduce((acc: WeatherData[], _item: any) => {
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
          }, []) as WeatherData[],
        };
      }),
      catchError((errorBody) => {
        const { cod, message } = errorBody.error;
        return of({
          data: [],
          error: message,
          errorCode: cod,
        });
      })
    );
  }
}
