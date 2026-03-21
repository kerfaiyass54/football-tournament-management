import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsActionsComponent } from './teams-actions.component';

describe('TeamsActionsComponent', () => {
  let component: TeamsActionsComponent;
  let fixture: ComponentFixture<TeamsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
