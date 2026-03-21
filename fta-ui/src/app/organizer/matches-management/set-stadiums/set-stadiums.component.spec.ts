import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStadiumsComponent } from './set-stadiums.component';

describe('SetStadiumsComponent', () => {
  let component: SetStadiumsComponent;
  let fixture: ComponentFixture<SetStadiumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetStadiumsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetStadiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
