import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultMatchesComponent } from './consult-matches.component';

describe('ConsultMatchesComponent', () => {
  let component: ConsultMatchesComponent;
  let fixture: ComponentFixture<ConsultMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultMatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
