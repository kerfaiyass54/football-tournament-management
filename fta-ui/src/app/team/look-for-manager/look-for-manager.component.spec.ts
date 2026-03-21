import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookForManagerComponent } from './look-for-manager.component';

describe('LookForManagerComponent', () => {
  let component: LookForManagerComponent;
  let fixture: ComponentFixture<LookForManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookForManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LookForManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
