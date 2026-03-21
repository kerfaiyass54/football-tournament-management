import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsTrainManagementComponent } from './fields-train-management.component';

describe('FieldsTrainManagementComponent', () => {
  let component: FieldsTrainManagementComponent;
  let fixture: ComponentFixture<FieldsTrainManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldsTrainManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldsTrainManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
