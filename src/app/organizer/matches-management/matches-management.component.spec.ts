import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesManagementComponent } from './matches-management.component';

describe('MatchesManagementComponent', () => {
  let component: MatchesManagementComponent;
  let fixture: ComponentFixture<MatchesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
