import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Steckbrief1Component } from './steckbrief1.component';

describe('Steckbrief1Component', () => {
  let component: Steckbrief1Component;
  let fixture: ComponentFixture<Steckbrief1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Steckbrief1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Steckbrief1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
