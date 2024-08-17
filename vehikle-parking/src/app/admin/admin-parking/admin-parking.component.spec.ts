import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParkingComponent } from './admin-parking.component';

describe('AdminParkingComponent', () => {
  let component: AdminParkingComponent;
  let fixture: ComponentFixture<AdminParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminParkingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
