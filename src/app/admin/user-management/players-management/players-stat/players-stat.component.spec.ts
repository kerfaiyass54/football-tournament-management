import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersStatComponent } from './players-stat.component';

describe('PlayersStatComponent', () => {
  let component: PlayersStatComponent;
  let fixture: ComponentFixture<PlayersStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersStatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
