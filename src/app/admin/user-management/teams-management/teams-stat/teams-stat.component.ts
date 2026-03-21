import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CakeChartComponent } from "../../../../components/charts/cake-chart/cake-chart.component";
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";
import { TeamService } from "../../../services/team.service";

@Component({
  selector: 'app-teams-stat',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CakeChartComponent,
    PreviousButtonComponent
  ],
  templateUrl: './teams-stat.component.html',
  styleUrl: './teams-stat.component.css'
})
export class TeamsStatComponent implements OnInit {

  constructor(private teamService: TeamService) {}

  /* =========================
     🎂 STATUS CHART
  ========================== */

  statusLabels: string[] = ['BANNED', 'CAN_PLAY', 'CLOSED'];
  statusData: number[] = [0, 0, 0];

  statusColors = [
    '#EF5350', // BANNED (Red)
    '#66BB6A', // CAN_PLAY (Green)
    '#FFA726'  // CLOSED (Orange)
  ];

  /* =========================
     📊 STATS
  ========================== */

  oldestTeam: number = 0;      // smallest establishYear
  newestTeam: number = 0;      // biggest establishYear
  highestBudget: number = 0;

  ngOnInit(): void {

    // Get all teams (large size for statistics)
    this.teamService.getAllTeams(0, 1000).subscribe(res => {

      const teams = res.content ?? res;
      if (!teams || teams.length === 0) return;

      let minYear = 9999;
      let maxYear = 0;
      let maxBudget = 0;

      teams.forEach((team: any) => {

        // Count status
        const index = this.statusLabels.indexOf(team.status);
        if (index !== -1) {
          this.statusData[index]++;
        }

        // Oldest / Newest
        if (team.establishYear) {

          if (team.establishYear < minYear)
            minYear = team.establishYear;

          if (team.establishYear > maxYear)
            maxYear = team.establishYear;
        }

        // Highest Budget
        if (team.budget && team.budget > maxBudget) {
          maxBudget = team.budget;
        }
      });

      this.oldestTeam = minYear;
      this.newestTeam = maxYear;
      this.highestBudget = maxBudget;

    });
  }
}
