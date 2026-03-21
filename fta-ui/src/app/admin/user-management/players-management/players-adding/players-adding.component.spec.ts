import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersAddingComponent } from './players-adding.component';

describe('PlayersAddingComponent', () => {
  let component: PlayersAddingComponent;
  let fixture: ComponentFixture<PlayersAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersAddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
