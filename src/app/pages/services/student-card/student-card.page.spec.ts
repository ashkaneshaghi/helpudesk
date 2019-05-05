import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardPage } from './student-card.page';

describe('StudentCardPage', () => {
  let component: StudentCardPage;
  let fixture: ComponentFixture<StudentCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
