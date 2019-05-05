import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityRegisterationPage } from './city-registeration.page';

describe('CityRegisterationPage', () => {
  let component: CityRegisterationPage;
  let fixture: ComponentFixture<CityRegisterationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityRegisterationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityRegisterationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
