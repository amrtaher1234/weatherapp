import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ConfigService } from '../../core/services/config.service';
import { WeatherService } from '../../core/services/weather.service';
import { WeatherDataResponse } from '../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  weatherData$!: Observable<WeatherDataResponse>;
  constructor(
    private weatherService: WeatherService,
    private configService: ConfigService,
    private title: Title,
    private meta: Meta
  ) {}
  ngOnInit() {
    this.title.setTitle(environment.META.home.title);
    this.meta.updateTag({
      name: 'description',
      content: environment.META.home.description,
    });

    this.weatherData$ = this.configService.reloadRequests.pipe(
      switchMap((_) => this.weatherService.getCurrentWeather())
    );
  }
}
