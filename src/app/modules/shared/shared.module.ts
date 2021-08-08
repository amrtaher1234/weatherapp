import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherIconPipe } from './pipes/weather-icon.pipe';
import { MatIconModule } from '@angular/material/icon';
import { TempratureSymbolPipe } from './pipes/temprature-symbol.pipe';
import { TempratureValuePipe } from './pipes/temprature-value.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LoaderComponent } from './components/loader/loader.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    WeatherCardComponent,
    WeatherIconPipe,
    TempratureSymbolPipe,
    TempratureValuePipe,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    WeatherCardComponent,
    WeatherIconPipe,
    TempratureSymbolPipe,
    TempratureValuePipe,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    LoaderComponent,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class SharedModule {}
