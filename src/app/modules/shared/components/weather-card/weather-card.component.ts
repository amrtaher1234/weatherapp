import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from 'src/app/modules/core/services/config.service';
import { WeatherData } from '../../models';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input()
  weatherData!: WeatherData;
  constructor(public configService: ConfigService) {}
}
