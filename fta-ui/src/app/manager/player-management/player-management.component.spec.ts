import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerManagementComponent } from './player-management.component';

describe('PlayerManagementComponent', () => {
  let component: PlayerManagementComponent;
  let fixture: ComponentFixture<PlayerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
