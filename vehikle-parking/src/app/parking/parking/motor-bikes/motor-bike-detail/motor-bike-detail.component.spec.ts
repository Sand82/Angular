import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorBikeDetailComponent } from './motor-bike-detail.component';

describe('MotorBikeDetailComponent', () => {
  let component: MotorBikeDetailComponent;
  let fixture: ComponentFixture<MotorBikeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorBikeDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorBikeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
