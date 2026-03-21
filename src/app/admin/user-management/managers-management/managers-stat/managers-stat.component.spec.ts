import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersStatComponent } from './managers-stat.component';

describe('ManagersStatComponent', () => {
  let component: ManagersStatComponent;
  let fixture: ComponentFixture<ManagersStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagersStatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagersStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
