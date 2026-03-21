import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsStatComponent } from './teams-stat.component';

describe('TeamsStatComponent', () => {
  let component: TeamsStatComponent;
  let fixture: ComponentFixture<TeamsStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsStatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
