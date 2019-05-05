import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlanAccessPage } from './wlan-access.page';

describe('WlanAccessPage', () => {
  let component: WlanAccessPage;
  let fixture: ComponentFixture<WlanAccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlanAccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlanAccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
