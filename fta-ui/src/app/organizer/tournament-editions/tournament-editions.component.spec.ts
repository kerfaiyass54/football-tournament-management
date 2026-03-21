import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentEditionsComponent } from './tournament-editions.component';

describe('TournamentEditionsComponent', () => {
  let component: TournamentEditionsComponent;
  let fixture: ComponentFixture<TournamentEditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentEditionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournamentEditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
