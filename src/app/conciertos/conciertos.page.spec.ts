import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciertosPage } from './conciertos.page';

describe('ConciertosPage', () => {
  let component: ConciertosPage;
  let fixture: ComponentFixture<ConciertosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciertosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciertosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
