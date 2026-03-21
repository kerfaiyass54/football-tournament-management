import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultRatingsComponent } from './consult-ratings.component';

describe('ConsultRatingsComponent', () => {
  let component: ConsultRatingsComponent;
  let fixture: ComponentFixture<ConsultRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultRatingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
