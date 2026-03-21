import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeChartComponent } from './cake-chart.component';

describe('CakeChartComponent', () => {
  let component: CakeChartComponent;
  let fixture: ComponentFixture<CakeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CakeChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
