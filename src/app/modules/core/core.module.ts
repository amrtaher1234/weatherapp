import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { WeatherService } from './services/weather.service';
import { CountriesService } from './services/countries.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ HeaderComponent],
  imports: [CommonModule, HttpClientModule, SharedModule, RouterModule],
  providers: [
    WeatherService,
    CountriesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
