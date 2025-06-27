import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpHomeComponent } from './lp-home.component';

describe('LpHomeComponent', () => {
  let component: LpHomeComponent;
  let fixture: ComponentFixture<LpHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LpHomeComponent]
    });
    fixture = TestBed.createComponent(LpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
