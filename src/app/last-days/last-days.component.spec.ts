import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDaysComponent } from './last-days.component';

describe('LastDaysComponent', () => {
  let component: LastDaysComponent;
  let fixture: ComponentFixture<LastDaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastDaysComponent]
    });
    fixture = TestBed.createComponent(LastDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
