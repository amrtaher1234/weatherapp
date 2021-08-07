export interface OpenWeatherResponse {}
export interface WeatherData {
  location: LocationData;
  tempratureType: TempratureTypes;
  weatherMeta: WeatherMeta;
  temprature: number;
  time: Date;
}

export interface LocationData {
  country: string;
  state?: string;
  lon?: number;
  lat?: number;
}

export enum TempratureTypes {
  Kelvin,
  Celsius,
  Fahrenheit,
}

export interface WeatherMeta {
  main: string;
  icon: string;
  description: string;
}
