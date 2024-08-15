import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorBikeComponent } from './motor-bike.component';

describe('MotorBikeComponent', () => {
  let component: MotorBikeComponent;
  let fixture: ComponentFixture<MotorBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorBikeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
