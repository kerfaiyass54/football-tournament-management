import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersListComponent } from './managers-list.component';

describe('ManagersListComponent', () => {
  let component: ManagersListComponent;
  let fixture: ComponentFixture<ManagersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagersListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
