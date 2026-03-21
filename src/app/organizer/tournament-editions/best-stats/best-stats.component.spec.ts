import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestStatsComponent } from './best-stats.component';

describe('BestStatsComponent', () => {
  let component: BestStatsComponent;
  let fixture: ComponentFixture<BestStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
