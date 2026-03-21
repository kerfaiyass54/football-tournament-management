import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumsManagementComponent } from './stadiums-management.component';

describe('StadiumsManagementComponent', () => {
  let component: StadiumsManagementComponent;
  let fixture: ComponentFixture<StadiumsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StadiumsManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StadiumsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
