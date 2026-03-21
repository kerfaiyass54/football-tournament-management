import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TableColumn } from "../../../../components/generic-table/generic-table.component";
import { PLAYER_TABLE_COLUMNS } from "../../../../Shared/constants/player.constants";
import { PlayerService } from "../../../services/player.service";
import { CustomListComponent } from "../../../../Shared/shared-ui/custom-list/custom-list.component";
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";

@Component({
  selector: 'app-players-list',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CustomListComponent,
    PreviousButtonComponent
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css',
})
export class PlayersListComponent implements OnInit {

  columns: TableColumn<any>[] = PLAYER_TABLE_COLUMNS;
  data: any[] = [];
  page: number = 1;
  size: number = 5;
  totalElements: number = 0;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.playerService.getAllPlayers(this.size, this.page - 1)
      .subscribe({
        next: (res: any) => {
          this.data = res.content;
          this.totalElements = res.totalElements;
        },
        error: (err: any) => console.error(err)
      });
  }

  onPageChange(newPage: number): void {
    this.page = newPage;
    this.loadPlayers();
  }

}
