import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'weatherIcon',
})
export class WeatherIconPipe implements PipeTransform {
  transform(iconName: string): string {
    return iconName
      ? `${environment.OPEP_WEATHER_ICONS_BASE}/${iconName}@2x.png`
      : '';
  }
}
