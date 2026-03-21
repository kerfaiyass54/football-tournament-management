import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeStatisticsComponent } from './see-statistics.component';

describe('SeeStatisticsComponent', () => {
  let component: SeeStatisticsComponent;
  let fixture: ComponentFixture<SeeStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
