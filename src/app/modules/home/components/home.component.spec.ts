import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CoreModule } from '../../core/core.module';
import { WeatherService } from '../../core/services/weather.service';
import {
  weatherDataResponse,
  weatherDataResponseWithError,
} from '../../shared/mocks/open-weather.mock';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';

class MockWeatherService extends WeatherService {
  getCurrentWeather() {
    return of(weatherDataResponse);
  }
}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let weatherService: MockWeatherService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [CoreModule, SharedModule],
      providers: [
        {
          provide: WeatherService,
          useclass: MockWeatherService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    weatherService = TestBed.inject(WeatherService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render weather cards', () => {
    component.ngOnInit();
    fixture.detectChanges();
    component.weatherData$.subscribe((res) => {
      expect(res).toBeDefined();
      expect(res.data.length).toBe(3);
      expect(
        fixture.nativeElement.querySelector('div.cards-wrapper')
          .childElementCount
      ).toBe(3);
    });
  });
  it('should render error wrapper in case there is a response with error', () => {
    spyOn(weatherService, 'getCurrentWeather').and.returnValue(
      of(weatherDataResponseWithError)
    );
    component.ngOnInit();
    fixture.detectChanges();
    component.weatherData$.subscribe((res) => {
      expect(res).toBeDefined();
      expect(
        fixture.nativeElement.querySelector('div.cards-wrapper')
          .childElementCount
      ).toBe(0);
      expect(
        fixture.nativeElement.querySelector('div.error-wrapper')
      ).toBeDefined();
    });
  });
});
