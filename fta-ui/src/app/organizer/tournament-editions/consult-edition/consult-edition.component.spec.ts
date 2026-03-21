import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultEditionComponent } from './consult-edition.component';

describe('ConsultEditionComponent', () => {
  let component: ConsultEditionComponent;
  let fixture: ComponentFixture<ConsultEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultEditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
