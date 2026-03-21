import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeManagementComponent } from './referee-management.component';

describe('RefereeManagementComponent', () => {
  let component: RefereeManagementComponent;
  let fixture: ComponentFixture<RefereeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefereeManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefereeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
