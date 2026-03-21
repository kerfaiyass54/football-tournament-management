import { Component, ChangeDetectionStrategy, computed, signal, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { GenericTableComponent } from "../../../../components/generic-table/generic-table.component";
import { PlayerService } from "../../../services/player.service";
import { PLAYER_TABLE_COLUMNS } from "../../../../Shared/constants/player.constants";
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";

@Component({
  selector: 'app-players-actions',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    GenericTableComponent,
    PreviousButtonComponent
  ],
  templateUrl: './players-actions.component.html',
  styleUrl: './players-actions.component.css',
})
export class PlayersActionsComponent implements OnInit {

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) {}

  searchTerm = signal('');
  selectedPlayers = signal<any[]>([]);
  players = signal<any[]>([]);

  columns = PLAYER_TABLE_COLUMNS;

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers() {
    // ✅ SAME STRUCTURE AS MANAGERS
    this.playerService.getAllPlayers(20, 0).subscribe({
      next: (res: any) => {
        this.players.set(res.content);
      },
      error: (err: any) => console.error(err)
    });
  }

  filteredPlayers = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.players();

    return this.players().filter(player =>
      Object.values(player).some(val =>
        String(val).toLowerCase().includes(term)
      )
    );
  });

  onSelectionChange(data: any[]) {
    // ✅ This ensures only ONE is selected
    this.selectedPlayers.set(data);
  }

  seeDetails() {
    const player = this.selectedPlayers()[0];
    if (!player) return;

    this.router.navigate(['/admin/player-details', player.id]);
  }
}
