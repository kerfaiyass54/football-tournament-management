import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CakeChartComponent } from "../../../../components/charts/cake-chart/cake-chart.component";
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";
import { PlayerService } from "../../../services/player.service";

@Component({
  selector: 'app-players-stat',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CakeChartComponent,
    PreviousButtonComponent
  ],
  templateUrl: './players-stat.component.html',
  styleUrl: './players-stat.component.css'
})
export class PlayersStatComponent implements OnInit {

  constructor(private playerService: PlayerService) {}

  /* =========================
     🎂 STATUS CHART
  ========================== */

  statusLabels: string[] = ['BANNED', 'PLAYING', 'PUNISHED', 'NEW', 'FREE_AGENT'];
  statusData: number[] = [0, 0, 0, 0, 0];

  statusColors = [
    '#EF5350', // BANNED
    '#66BB6A', // PLAYING
    '#FFA726', // PUNISHED
    '#42A5F5', // NEW
    '#AB47BC'  // FREE_AGENT
  ];

  /* =========================
     📊 STATS
  ========================== */

  youngestPlayer: number = 0;
  oldestPlayer: number = 0;
  highestPaid: number = 0;

  ngOnInit(): void {

    // Get all players (large size to compute stats)
    this.playerService.getAllPlayers(1000, 0).subscribe(res => {

      const players = res.content ?? res;
      if (!players || players.length === 0) return;

      let minYear = 9999;
      let maxYear = 0;

      players.forEach((p: any) => {

        // Count status
        const index = this.statusLabels.indexOf(p.status);
        if (index !== -1) {
          this.statusData[index]++;
        }

        // Youngest / Oldest
        if (p.yearOfBirth) {
          if (p.yearOfBirth < minYear) minYear = p.yearOfBirth;
          if (p.yearOfBirth > maxYear) maxYear = p.yearOfBirth;
        }
      });

      this.oldestPlayer = minYear;
      this.youngestPlayer = maxYear;
    });

    // Highest Paid (from dedicated endpoint)
    this.playerService.getHighestPrice().subscribe(price => {
      this.highestPaid = price;
    });
  }
}
