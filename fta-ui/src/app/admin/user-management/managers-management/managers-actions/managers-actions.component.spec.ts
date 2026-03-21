import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersActionsComponent } from './managers-actions.component';

describe('ManagersActionsComponent', () => {
  let component: ManagersActionsComponent;
  let fixture: ComponentFixture<ManagersActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagersActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagersActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
