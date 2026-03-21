import { Component, ChangeDetectionStrategy, computed, signal, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { GenericTableComponent } from "../../../../components/generic-table/generic-table.component";
import { TeamService } from "../../../services/team.service";
import { TEAM_TABLE_COLUMNS } from "../../../../Shared/constants/team.constants";
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";

@Component({
  selector: 'app-teams-actions',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    GenericTableComponent,
    PreviousButtonComponent
  ],
  templateUrl: './teams-actions.component.html',
  styleUrl: './teams-actions.component.css',
})
export class TeamsActionsComponent implements OnInit {

  constructor(
    private teamService: TeamService,
    private router: Router
  ) {}

  searchTerm = signal('');
  selectedTeams = signal<any[]>([]);
  teams = signal<any[]>([]);

  columns = TEAM_TABLE_COLUMNS;

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams() {
    this.teamService.getAllTeams(0, 20).subscribe({
      next: (res: any) => {
        this.teams.set(res.content ?? res);
      },
      error: (err: any) => console.error(err)
    });
  }

  filteredTeams = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.teams();

    return this.teams().filter(team =>
      Object.values(team).some(val =>
        String(val).toLowerCase().includes(term)
      )
    );
  });

  onSelectionChange(data: any[]) {
    this.selectedTeams.set(data);
  }

  seeDetails() {
    const team = this.selectedTeams()[0];
    if (!team) return;

    this.router.navigate(['/admin/team-details', team.id]);
  }
}
