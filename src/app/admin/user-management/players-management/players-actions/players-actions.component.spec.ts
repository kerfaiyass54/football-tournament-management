import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersActionsComponent } from './players-actions.component';

describe('PlayersActionsComponent', () => {
  let component: PlayersActionsComponent;
  let fixture: ComponentFixture<PlayersActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
