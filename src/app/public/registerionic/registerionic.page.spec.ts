import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterionicPage } from './registerionic.page';

describe('RegisterionicPage', () => {
  let component: RegisterionicPage;
  let fixture: ComponentFixture<RegisterionicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterionicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
