import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConcertPage } from './add-concert.page';

describe('AddConcertPage', () => {
  let component: AddConcertPage;
  let fixture: ComponentFixture<AddConcertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConcertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConcertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
