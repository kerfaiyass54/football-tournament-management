import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultTrainingsComponent } from './consult-trainings.component';

describe('ConsultTrainingsComponent', () => {
  let component: ConsultTrainingsComponent;
  let fixture: ComponentFixture<ConsultTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultTrainingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
