import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamConsultComponent } from './team-consult.component';

describe('TeamConsultComponent', () => {
  let component: TeamConsultComponent;
  let fixture: ComponentFixture<TeamConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamConsultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
