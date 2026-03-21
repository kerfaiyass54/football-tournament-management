import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportersManagementComponent } from './supporters-management.component';

describe('SupportersManagementComponent', () => {
  let component: SupportersManagementComponent;
  let fixture: ComponentFixture<SupportersManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportersManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
