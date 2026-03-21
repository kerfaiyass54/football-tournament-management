import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereesManagementComponent } from './referees-management.component';

describe('RefereesManagementComponent', () => {
  let component: RefereesManagementComponent;
  let fixture: ComponentFixture<RefereesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefereesManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefereesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
