import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {PieChartComponent} from "../../components/charts/pie-chart/pie-chart.component";
import {StatsCardComponent} from "../../components/cards/stats-card/stats-card.component";

@Component({
  selector: 'app-admin-home',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PieChartComponent,
    StatsCardComponent,
  ],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css',
})
export class AdminHomeComponent {

  dataset = signal<number[]>([4,5,6,8,9,10,12]);

  labels = signal<string[]>([
    'Players',
    'Managers',
    'Teams',
    'Organizer',
    'Referee',
    'Supporter',
    'Builder'
  ]);

  colors = signal<string[]>([
    '#ffbe0b',
    '#fb5607',
    '#ff006e',
    '#8338ec',
    '#3a86ff',
    '#4a5759',
    '#22223b'
  ]);


}
