import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsUiComponent } from './actions-ui.component';

describe('ActionsUiComponent', () => {
  let component: ActionsUiComponent;
  let fixture: ComponentFixture<ActionsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionsUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
