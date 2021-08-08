import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ConfigService } from '../../core/services/config.service';
import { CountriesService } from '../../core/services/countries.service';
import { TempratureTypes } from '../../shared/models';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  configForm!: FormGroup;
  constructor(
    public fb: FormBuilder,
    public configService: ConfigService,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.configForm = this.fb.group({
      countries: this.fb.array([]),
      tempratureType: [TempratureTypes.Kelvin, [Validators.required]],
    });

    this.configService.config.pipe(take(1)).subscribe((c) => {
      this.configForm.controls.tempratureType.setValue(c.tempratureType);
      c.selectedCountryIds.forEach(this.addCountry.bind(this));
    });
  }
  addCountry(countryId = '') {
    const countries = this.configForm.controls.countries as FormArray;
    countries.push(
      this.fb.group({
        countryId: [
          countryId,
          [
            Validators.required,
            Validators.minLength(7),
            Validators.maxLength(7),
            Validators.pattern(/^-?(0|[1-9]\d*)?$/),
          ],
        ],
      })
    );
  }
  removeCountry(index: number) {
    this.countriesFormArray.removeAt(index);
  }
  submitConfig() {
    if (this.configForm.valid) {
      this.countriesService.setCountriesIds(
        this.countriesFormArray.value.map((v: any) => v.countryId)
      );

      this.router.navigateByUrl('/');
    }
  }
  get countriesFormArray() {
    return this.configForm.controls.countries as FormArray;
  }
}
