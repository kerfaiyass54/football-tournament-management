import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TableColumn } from "../../../../components/generic-table/generic-table.component";
import { TEAM_TABLE_COLUMNS } from "../../../../Shared/constants/team.constants";
import { TeamService } from "../../../services/team.service";
import { CustomListComponent } from "../../../../Shared/shared-ui/custom-list/custom-list.component";
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";

@Component({
  selector: 'app-teams-list',
  imports: [
    CustomListComponent,
    PreviousButtonComponent
  ],
  templateUrl: './teams-list.component.html',
  styleUrl: './teams-list.component.css',
})
export class TeamsListComponent implements OnInit {

  columns: TableColumn<any>[] = TEAM_TABLE_COLUMNS;
  data: any[] = [];
  page: number = 1;
  size: number = 5;
  totalElements: number = 0;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.loadTeams();
  }

  loadTeams() {
    this.teamService.getAllTeams(this.page - 1, this.size)
      .subscribe({
        next: (res: any) => {
          this.data = res.content;
          this.totalElements = res.totalElements;
        },
        error: (err: any) => console.error(err)
      });
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.loadTeams();
  }
}
