import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersManagementComponent } from './managers-management.component';

describe('ManagersManagementComponent', () => {
  let component: ManagersManagementComponent;
  let fixture: ComponentFixture<ManagersManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagersManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
