import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLineUpComponent } from './set-line-up.component';

describe('SetLineUpComponent', () => {
  let component: SetLineUpComponent;
  let fixture: ComponentFixture<SetLineUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetLineUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetLineUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
