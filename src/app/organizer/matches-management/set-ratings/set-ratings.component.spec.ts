import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRatingsComponent } from './set-ratings.component';

describe('SetRatingsComponent', () => {
  let component: SetRatingsComponent;
  let fixture: ComponentFixture<SetRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetRatingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
