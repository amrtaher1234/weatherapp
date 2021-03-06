// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  OPEN_WEATHER_KEY: '06d741d301ded1e2207c00bece04f14e',
  OPEN_WEATHER_API: 'https://api.openweathermap.org/data/2.5/group',
  OPEP_WEATHER_ICONS_BASE: 'http://openweathermap.org/img/wn',
  DEFAULT_COUNTRIES_IDS: ['5107152', '5245497', '3117735', '658225', '2968815'],
  ERROR_MESSAGES: {
    '404': 'No weather results are available with the given city ids',
    default: 'Something went wrong, please try again later',
  },
  META: {
    home: {
      title: 'Weather App | Home',
      description:
        'An application that shows a number of weather data for cities that you could define in the settings',
    },
    settings: {
      title: 'Weather App | Settings',
      description: 'Update weather configuration over here',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
