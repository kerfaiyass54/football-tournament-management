import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsManagementComponent } from './tournaments-management.component';

describe('TournamentsManagementComponent', () => {
  let component: TournamentsManagementComponent;
  let fixture: ComponentFixture<TournamentsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentsManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournamentsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
