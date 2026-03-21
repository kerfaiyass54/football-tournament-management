import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizersManagementComponent } from './organizers-management.component';

describe('OrganizersManagementComponent', () => {
  let component: OrganizersManagementComponent;
  let fixture: ComponentFixture<OrganizersManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizersManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
