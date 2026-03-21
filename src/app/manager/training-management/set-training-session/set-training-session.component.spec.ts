import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTrainingSessionComponent } from './set-training-session.component';

describe('SetTrainingSessionComponent', () => {
  let component: SetTrainingSessionComponent;
  let fixture: ComponentFixture<SetTrainingSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTrainingSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetTrainingSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
