import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CakeChartComponent } from "../../../../components/charts/cake-chart/cake-chart.component";
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";
import { BuilderService } from "../../../services/builder.service";

@Component({
  selector: 'app-builders-stat',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CakeChartComponent,
    PreviousButtonComponent
  ],
  templateUrl: './builders-stat.component.html',
  styleUrl: './builders-stat.component.css',
})
export class BuildersStatComponent implements OnInit {

  constructor(private builderService: BuilderService) {}

  private expertisesEnum = [
    'STRUCTURE',
    'TURF',
    'DRAINAGE',
    'LIGHTING',
    'SAFETY',
    'PROJECT_MANAGE',
    'REGULATION',
    'INNOVATION',
    'SUSTAINABILITY'
  ];

  expertiseLabels: string[] = [];
  expertiseData: any[] = [];

  expertiseColors = [
    '#4CAF50',
    '#81C784',
    '#29B6F6',
    '#FFA726',
    '#EF5350',
    '#AB47BC',
    '#5C6BC0',
    '#26A69A',
    '#8D6E63'
  ];

  youngestAge: any = 0;
  oldestAge: any = 0;
  mostNationality: string = '';

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {

    // ✅ YEARS (FIXED FIELD NAMES)
    this.builderService.getYearsStats().subscribe({
      next: (res: any) => {
        this.youngestAge = res.minYear;
        this.oldestAge = res.maxYear;
      },
      error: (err: any) => console.error(err)
    });

    // ✅ MOST NATIONALITY
    this.builderService.getMostNationality().subscribe({
      next: (res: string) => {
        this.mostNationality = res;
      },
      error: err => console.error(err)
    });

    // ✅ EXPERTISE DISTRIBUTION (FIXED FIELD NAME)
    this.expertisesEnum.forEach(exp => {
      this.builderService.getExpertiseStats(exp).subscribe({
        next: (res: any) => {

          const formattedLabel = exp
            .replace(/_/g, ' ')
            .toLowerCase()
            .replace(/\b\w/g, c => c.toUpperCase());

          this.expertiseLabels.push(formattedLabel);

          // 🔥 FIXED: use numberOfBuilders (NOT count)
          this.expertiseData.push(res.numberOfBuilders);
        },
        error: err => console.error(err)
      });
    });
  }
}
