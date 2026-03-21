import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerManagementComponent } from './career-management.component';

describe('CareerManagementComponent', () => {
  let component: CareerManagementComponent;
  let fixture: ComponentFixture<CareerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
