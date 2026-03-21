import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDetailsComponent } from './manager-details.component';

describe('ManagerDetailsComponent', () => {
  let component: ManagerDetailsComponent;
  let fixture: ComponentFixture<ManagerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
