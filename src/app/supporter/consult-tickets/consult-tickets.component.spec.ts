import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultTicketsComponent } from './consult-tickets.component';

describe('ConsultTicketsComponent', () => {
  let component: ConsultTicketsComponent;
  let fixture: ComponentFixture<ConsultTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
