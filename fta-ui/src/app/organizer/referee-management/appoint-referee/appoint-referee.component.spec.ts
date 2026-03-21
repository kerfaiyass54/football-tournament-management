import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointRefereeComponent } from './appoint-referee.component';

describe('AppointRefereeComponent', () => {
  let component: AppointRefereeComponent;
  let fixture: ComponentFixture<AppointRefereeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointRefereeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointRefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
