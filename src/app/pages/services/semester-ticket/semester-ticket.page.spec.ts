import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterTicketPage } from './semester-ticket.page';

describe('SemesterTicketPage', () => {
  let component: SemesterTicketPage;
  let fixture: ComponentFixture<SemesterTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterTicketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
