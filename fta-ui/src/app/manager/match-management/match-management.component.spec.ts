import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchManagementComponent } from './match-management.component';

describe('MatchManagementComponent', () => {
  let component: MatchManagementComponent;
  let fixture: ComponentFixture<MatchManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
