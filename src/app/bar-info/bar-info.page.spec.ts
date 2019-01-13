import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarInfoPage } from './bar-info.page';

describe('BarInfoPage', () => {
  let component: BarInfoPage;
  let fixture: ComponentFixture<BarInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
