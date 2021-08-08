import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../../core/services/weather.service';
import { WeatherData } from '../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  weatherData$: Observable<WeatherData[]>;
  constructor(private weatherService: WeatherService) {
    this.weatherData$ = this.weatherService.getCurrentWeather();
  }
}
