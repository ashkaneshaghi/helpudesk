import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOfConductPage } from './code-of-conduct.page';

describe('CodeOfConductPage', () => {
  let component: CodeOfConductPage;
  let fixture: ComponentFixture<CodeOfConductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeOfConductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeOfConductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
