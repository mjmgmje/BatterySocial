import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubLecturaPage } from './club-lectura.page';

describe('ClubLecturaPage', () => {
  let component: ClubLecturaPage;
  let fixture: ComponentFixture<ClubLecturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubLecturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubLecturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
