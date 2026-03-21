import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAdjustComponent } from './transfer-adjust.component';

describe('TransferAdjustComponent', () => {
  let component: TransferAdjustComponent;
  let fixture: ComponentFixture<TransferAdjustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferAdjustComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
