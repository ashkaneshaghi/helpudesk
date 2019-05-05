import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalOfficePage } from './international-office.page';

describe('InternationalOfficePage', () => {
  let component: InternationalOfficePage;
  let fixture: ComponentFixture<InternationalOfficePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalOfficePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalOfficePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
