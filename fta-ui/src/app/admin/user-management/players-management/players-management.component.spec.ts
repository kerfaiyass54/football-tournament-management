import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersManagementComponent } from './players-management.component';

describe('PlayersManagementComponent', () => {
  let component: PlayersManagementComponent;
  let fixture: ComponentFixture<PlayersManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
