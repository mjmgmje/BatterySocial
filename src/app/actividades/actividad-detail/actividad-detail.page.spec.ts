import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadDetailPage } from './actividad-detail.page';

describe('ActividadDetailPage', () => {
  let component: ActividadDetailPage;
  let fixture: ComponentFixture<ActividadDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
