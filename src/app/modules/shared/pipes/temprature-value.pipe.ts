import { Pipe, PipeTransform } from '@angular/core';
import { TempratureTypes } from '../models';

@Pipe({
  name: 'tempratureValue',
})
export class TempratureValuePipe implements PipeTransform {
  transform(value: number, type: TempratureTypes): number {
    if (type === TempratureTypes.Celsius) {
      return Number((value - 273.15).toFixed(2));
    } else if (type === TempratureTypes.Fahrenheit) {
      return Number((((value - 273.15) * 9) / 5 + 32).toFixed(2));
    } else {
      return value;
    }
  }
}
