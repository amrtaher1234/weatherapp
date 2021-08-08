import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ConfigService } from '../../core/services/config.service';
import { WeatherService } from '../../core/services/weather.service';
import { WeatherData, WeatherDataResponse } from '../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  weatherData$!: Observable<WeatherDataResponse>;
  constructor(
    private weatherService: WeatherService,
    private configService: ConfigService
  ) {}
  ngOnInit() {
    this.weatherData$ = this.configService.reloadRequests.pipe(
      switchMap((_) => this.weatherService.getCurrentWeather())
    );
  }
}
