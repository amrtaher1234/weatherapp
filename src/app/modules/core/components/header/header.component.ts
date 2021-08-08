import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TempratureTypes } from 'src/app/modules/shared/models';
import { ConfigService } from '../../services/config.service';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private configService: ConfigService,
    public countriesService: CountriesService,
    private router: Router
  ) {}

  setTempratureType(tempratureType: TempratureTypes) {
    this.configService.setTempratureType(tempratureType);
  }
  clearCustomCountriesIds() {
    if (localStorage.getItem('countries')) {
      this.countriesService.clearCustomCountriesIds();
      this.configService.reloadPages();
    }
  }
  showClearCountriesButton() {
    return !!localStorage.getItem('countries');
  }
}
