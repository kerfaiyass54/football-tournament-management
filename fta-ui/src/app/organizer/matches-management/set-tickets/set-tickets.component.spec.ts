import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTicketsComponent } from './set-tickets.component';

describe('SetTicketsComponent', () => {
  let component: SetTicketsComponent;
  let fixture: ComponentFixture<SetTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
