import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersAddingComponent } from './managers-adding.component';

describe('ManagersAddingComponent', () => {
  let component: ManagersAddingComponent;
  let fixture: ComponentFixture<ManagersAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagersAddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagersAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
