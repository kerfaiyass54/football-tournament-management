import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsAddingComponent } from './teams-adding.component';

describe('TeamsAddingComponent', () => {
  let component: TeamsAddingComponent;
  let fixture: ComponentFixture<TeamsAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsAddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
