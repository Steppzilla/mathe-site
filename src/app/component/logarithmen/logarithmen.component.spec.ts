import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogarithmenComponent } from './logarithmen.component';

describe('LogarithmenComponent', () => {
  let component: LogarithmenComponent;
  let fixture: ComponentFixture<LogarithmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogarithmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogarithmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
