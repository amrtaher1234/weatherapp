import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ConfigService } from 'src/app/modules/core/services/config.service';
import { expectedWeatherDataForMultipleCitiesMock } from '../../mocks/open-weather.mock';
import { SharedModule } from '../../shared.module';

import { WeatherCardComponent } from './weather-card.component';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;
  let countryElm: HTMLElement;
  let tempElm: HTMLElement;
  let timeElm: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherCardComponent],
      imports: [SharedModule],
      providers: [ConfigService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render weather card correctly with data', () => {
    const weatherData = expectedWeatherDataForMultipleCitiesMock[0];
    component.weatherData = weatherData;
    fixture.detectChanges();
    countryElm = fixture.nativeElement.querySelector('p.card__country');
    tempElm = fixture.nativeElement.querySelector('h1.card__temp');
    timeElm = fixture.nativeElement.querySelector('h2.card__time');
    expect(countryElm.textContent).toContain(weatherData.location.country);
    expect(tempElm.textContent).toContain(weatherData.temprature);
    expect(timeElm.textContent).toContain(
      weatherData.time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
      })
    );
  });
});
