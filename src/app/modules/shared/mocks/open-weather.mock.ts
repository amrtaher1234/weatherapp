import { TempratureTypes, WeatherData } from '../models';
import { getCurrentTimeWithDifference } from '../utils';

export const weatherForMultipleCitiesMock = {
  cnt: 2,
  list: [
    {
      coord: {
        lon: -74.1882,
        lat: 42.9387,
      },
      sys: {
        country: 'US',
        timezone: -14400,
        sunrise: 1628416529,
        sunset: 1628467758,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      main: {
        temp: 295.47,
        feels_like: 296.21,
        temp_min: 293.4,
        temp_max: 297.85,
        pressure: 1019,
        humidity: 94,
      },
      visibility: 10000,
      wind: {
        speed: 1.34,
        deg: 180,
      },
      clouds: {
        all: 90,
      },
      dt: 1628428162,
      id: 5107152,
      name: 'Amsterdam',
    },
    {
      coord: {
        lon: -83.5618,
        lat: 35.8681,
      },
      sys: {
        country: 'US',
        timezone: -14400,
        sunrise: 1628419656,
        sunset: 1628469130,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      main: {
        temp: 292.92,
        feels_like: 293.49,
        temp_min: 291.32,
        temp_max: 295.76,
        pressure: 1021,
        humidity: 97,
      },
      visibility: 10000,
      wind: {
        speed: 0,
        deg: 0,
      },
      clouds: {
        all: 1,
      },
      dt: 1628428176,
      id: 4656585,
      name: 'Sevierville',
    },
  ],
};
export const expectedWeatherDataForMultipleCitiesMock: WeatherData[] = [
  {
    location: {
      country: 'Amsterdam',
    },
    temprature: 295.47,
    time: getCurrentTimeWithDifference(-14400),
    weatherMeta: {
      main: 'clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
    tempratureType: TempratureTypes.Kelvin,
  },
  {
    location: {
      country: 'Sevierville',
    },
    temprature: 292.92,
    time: getCurrentTimeWithDifference(-14400),
    weatherMeta: {
      main: 'clear',
      description: 'clear sky',
      icon: '01d',
    },
    tempratureType: TempratureTypes.Kelvin,
  },
];
