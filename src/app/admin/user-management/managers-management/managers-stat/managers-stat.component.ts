import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CakeChartComponent } from "../../../../components/charts/cake-chart/cake-chart.component";
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";
import { ManagerService } from "../../../services/manager.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-managers-stat',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CakeChartComponent,
    PreviousButtonComponent
  ],
  templateUrl: './managers-stat.component.html',
  styleUrl: './managers-stat.component.css',
})
export class ManagersStatComponent implements OnInit {

  constructor(private managerService: ManagerService) {}

  /* =========================
     🎂 STATUS CHART
  ========================== */
  status:any = [];
  statusLabels: string[] = ['Retired', 'Free', 'Banned', 'Taken'];
  statusData: number[] = [0,0,0,0];

  statusColors = [
    '#EF5350', // Retired
    '#66BB6A', // Free
    '#FFA726', // Banned
    '#42A5F5'  // Taken
  ];

  /* =========================
     📊 STATS
  ========================== */

  youngestManager: number = 0;
  oldestManager: number = 0;
  mostNationality: string = '';

  ngOnInit(): void {

    for (let i: number = 0; i < 4; i++) {
      this.managerService.getNumberOfManagersByStatus(this.statusLabels[i].toUpperCase()).subscribe(
        (n: number)=>{
          this.statusData[i] = n;
        }
      );
    }


    this.managerService.getManagers(0, 1000).subscribe(res => {

      const managers = res.content ?? res;
      if (!managers || managers.length === 0) return;

      let minYear = 9999;
      let maxYear = 0;
      const nationalityCount: any = {};

      managers.forEach((m: any) => {

        if (m.yearOfBirth) {
          if (m.yearOfBirth < minYear) minYear = m.yearOfBirth;
          if (m.yearOfBirth > maxYear) maxYear = m.yearOfBirth;
        }

        if (m.nationality) {
          nationalityCount[m.nationality] =
            (nationalityCount[m.nationality] || 0) + 1;
        }
      });

      this.oldestManager = minYear;
      this.youngestManager = maxYear;

      this.mostNationality =
        Object.keys(nationalityCount).reduce((a, b) =>
          nationalityCount[a] > nationalityCount[b] ? a : b
        );
    });
  }


}
