import {Component, OnInit, inject, PLATFORM_ID, Input, ChangeDetectionStrategy} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-pie-chart',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChartModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css',
})
export class PieChartComponent implements OnInit {
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);
  @Input() labels: any[] = [];
  @Input() dataset: any[] = [];
  @Input() colors: any[] = [];
  @Input() title: any = '';
  @Input() subtitle: any = '';


  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');

      this.data = {
        labels: this.labels,
        datasets: [
          {
            data: this.dataset,
            backgroundColor: this.colors,
            hoverBackgroundColor: this.colors
          }
        ]
      };


      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        }
      };
    }
  }
}
