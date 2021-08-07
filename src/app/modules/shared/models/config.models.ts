import { TempratureTypes } from './weather.models';

export interface Config {
  tempratureType: TempratureTypes;
  selectedCountryIds: string[];
}
