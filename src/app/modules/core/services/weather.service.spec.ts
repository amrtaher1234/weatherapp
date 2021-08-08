import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { WeatherService } from './weather.service';
import { environment } from 'src/environments/environment';
import {
  expectedWeatherDataForMultipleCitiesMock,
  weatherForMultipleCitiesMock,
} from '../../shared/mocks/open-weather.mock';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return Weather data transformed correctly', (done: DoneFn) => {
    service.getCurrentWeather().subscribe((result) => {
      let { data } = result;
      // neglect comparing dates and assigning them to the same value
      let currentDate = new Date();
      data = data.map((item) => ({ ...item, time: currentDate }));
      expect(data).toEqual(
        expectedWeatherDataForMultipleCitiesMock.map((item) => ({
          ...item,
          time: currentDate,
        }))
      );
      done();
    });
    const request = httpTestingController.expectOne(() => true);
    request.flush(weatherForMultipleCitiesMock);
    httpTestingController.verify();
  });
});
