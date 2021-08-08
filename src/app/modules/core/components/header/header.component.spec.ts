import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: any;

  beforeEach(async () => {
    store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [SharedModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display clear countires button if no custom countries are defined in storage', () => {
    expect(fixture.nativeElement.querySelector('.clear-btn')).toBeNull();
  });

  it('should display clear button if custom countries defined', () => {
    localStorage.setItem('countries', JSON.stringify(['1234567']));
    expect(fixture.nativeElement.querySelector('.clear-btn')).toBeDefined();
  });

  it('should remove clear button after pressing it', () => {
    localStorage.setItem('countries', JSON.stringify(['1234567']));
    fixture.detectChanges();
    fixture.nativeElement.querySelector('.clear-btn').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.clear-btn')).toBeNull();
  });
});
