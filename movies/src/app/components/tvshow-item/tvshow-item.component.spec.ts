import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowItemComponent } from './tvshow-item.component';

describe('TvshowItemComponent', () => {
  let component: TvshowItemComponent;
  let fixture: ComponentFixture<TvshowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvshowItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvshowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
