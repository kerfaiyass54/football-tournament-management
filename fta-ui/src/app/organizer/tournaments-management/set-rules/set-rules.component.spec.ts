import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRulesComponent } from './set-rules.component';

describe('SetRulesComponent', () => {
  let component: SetRulesComponent;
  let fixture: ComponentFixture<SetRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetRulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
