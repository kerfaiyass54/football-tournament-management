import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersManagementComponent } from './builders-management.component';

describe('BuildersManagementComponent', () => {
  let component: BuildersManagementComponent;
  let fixture: ComponentFixture<BuildersManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildersManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
