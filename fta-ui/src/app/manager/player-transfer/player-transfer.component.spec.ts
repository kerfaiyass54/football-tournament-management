import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTransferComponent } from './player-transfer.component';

describe('PlayerTransferComponent', () => {
  let component: PlayerTransferComponent;
  let fixture: ComponentFixture<PlayerTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
