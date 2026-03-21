import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultTournamentComponent } from './consult-tournament.component';

describe('ConsultTournamentComponent', () => {
  let component: ConsultTournamentComponent;
  let fixture: ComponentFixture<ConsultTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultTournamentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
