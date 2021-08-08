import { Pipe, PipeTransform } from '@angular/core';
import { TempratureTypes } from '../models';

@Pipe({
  name: 'tempratureSymbol',
})
export class TempratureSymbolPipe implements PipeTransform {
  transform(type: TempratureTypes): string {
    if (type === TempratureTypes.Celsius) {
      return '°C';
    } else if (type === TempratureTypes.Kelvin) {
      return 'K';
    } else if (type === TempratureTypes.Fahrenheit) {
      return '°F';
    } else {
      return '';
    }
  }
}
