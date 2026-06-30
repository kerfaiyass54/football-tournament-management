import {
  AfterViewInit,
  Component,
  inject,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

import { BuilderStadiumService } from '../../Shared/services/builder-stadium/builder-stadium.service';

Chart.register(
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {

  private service = inject(BuilderStadiumService);

  loading = signal(true);

  totalStadiums = signal<number>(0);
  totalOperations = signal<number>(0);

  chart?: Chart;

  ngAfterViewInit(): void {
    this.loadStats();
  }

  private loadStats(): void {

    this.service.getStats().subscribe({
      next: (stats: any) => {

        this.totalStadiums.set(
          stats.totalStadiums ?? 0
        );

        this.totalOperations.set(
          stats.totalOperations ?? 0
        );

        this.loading.set(false);

        setTimeout(() => {
          this.createChart(
            stats.stadiumsByType ?? {}
          );
        });
      },

      error: err => {
        console.error(err);
        this.loading.set(false);
      }
    });
  }

  private createChart(
    types: Record<string, number>
  ): void {

    const labels = Object.keys(types);
    const values = Object.values(types);

    this.chart?.destroy();

    this.chart = new Chart('stadiumTypesChart', {
      type: 'doughnut',

      data: {
        labels,

        datasets: [
          {
            data: values,

            backgroundColor: [
              '#4f46e5',
              '#06b6d4',
              '#10b981',
              '#f59e0b',
              '#ef4444',
              '#8b5cf6',
              '#ec4899'
            ],

            borderWidth: 0
          }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}
