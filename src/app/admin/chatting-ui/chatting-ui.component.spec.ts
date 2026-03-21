import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattingUiComponent } from './chatting-ui.component';

describe('ChattingUiComponent', () => {
  let component: ChattingUiComponent;
  let fixture: ComponentFixture<ChattingUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChattingUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChattingUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
