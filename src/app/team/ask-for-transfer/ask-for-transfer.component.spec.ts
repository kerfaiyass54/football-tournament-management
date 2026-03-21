import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskForTransferComponent } from './ask-for-transfer.component';

describe('AskForTransferComponent', () => {
  let component: AskForTransferComponent;
  let fixture: ComponentFixture<AskForTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskForTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AskForTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
