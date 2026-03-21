import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersActionsComponent } from './builders-actions.component';

describe('BuildersActionsComponent', () => {
  let component: BuildersActionsComponent;
  let fixture: ComponentFixture<BuildersActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildersActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildersActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
