import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDetailPage } from './libro-detail.page';

describe('LibroDetailPage', () => {
  let component: LibroDetailPage;
  let fixture: ComponentFixture<LibroDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
