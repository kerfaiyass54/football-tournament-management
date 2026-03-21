import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultRefereeComponent } from './consult-referee.component';

describe('ConsultRefereeComponent', () => {
  let component: ConsultRefereeComponent;
  let fixture: ComponentFixture<ConsultRefereeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultRefereeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultRefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
