import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLocationComponent } from './change-location.component';

describe('ChangeLocationComponent', () => {
  let component: ChangeLocationComponent;
  let fixture: ComponentFixture<ChangeLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
