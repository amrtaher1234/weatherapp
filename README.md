# Weather Application

## A quick overview

This was a fairly simple task that could be made in a much simpler way but I decided to add some complexity and some additional features like adding custom city ids to showcase what I can do and to make such application scalable for adding newer features

## Project Structure

I decided to follow up a pattern which defines two main modules, a **core** module which defines all of the application single used instances (services) and core modules that shall be used across the application and a **shared** module that will have all of the shared components, pipes, directives and models.

app
├── modules
│   └── core
│       ├── components
│       ├── interceptors
│       ├── services
│       └── index.js
│   └── shared
│       ├── components
│       ├── mocks
│       ├── pipes
│       ├── utils
│   └── (Module Name)
│       ├── components
│       ├── services
│       ├── pipes
└──


Breaking things further:

`Core Module` contains the three main services in our application:
- `Weather Service`: responsible for fetching data from open weather api and mapping it into our `WeatherData` interfaces
- `Countries Service`: responsible for storing and getting the countries ids that will be used to fetch data from our backend
- `Config Service`: responsible for setting global configurations (current countries and current temprature type)

Also, core module will contain core components like the `Header` component.


`Shared Module` contains all of the transformation pipes that transfer the temprature values and icons and images as well, also it contains the weather card component that handles rendering the view of the weather data.


## Used Libs and Internal Dependencies

- `Angular Material` used it for its UI components like the header toolbar and icons and buttons
- `Interceptors` to add `appid` param in our open weather api calls
- `Reactive Forms` in the settings module to handle errors


## Modules 

- `Home Module` is the module that will be responsible for rendering the weather for the countries specified in our either (`environment` or `localstorage`). 

- `Settings Module` this module will be responsible for configuring the global settings ( current countries ids to fetch their weather data )


## Testing

I tried to cover most of the application test cases in components, services and pipes.


## References

These are some references for why I chose such project structure and UI as well

- (Core/Shared Module)[https://frontpills.com/posts/2019/core-shared-modules/]
- (Inspired Weather Cards)[https://www.pinterest.com/pin/45599014967553568/]


## Final Note

I decided to use a very simple UI so I could make it responsive on different screens easily.
