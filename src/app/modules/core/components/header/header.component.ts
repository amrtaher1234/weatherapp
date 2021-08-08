import { Component, OnInit } from '@angular/core';
import { TempratureTypes } from 'src/app/modules/shared/models';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private configService: ConfigService) {}

  setTempratureType(tempratureType: TempratureTypes) {
    this.configService.setTempratureType(tempratureType);
  }
}
