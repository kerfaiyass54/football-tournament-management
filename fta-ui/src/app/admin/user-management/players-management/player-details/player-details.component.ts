import { Component, ChangeDetectionStrategy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../../services/player.service';
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";
import { LoaderComponent } from "../../../../components/loader/loader.component";
import { COUNTRIES } from "../../../../Shared/constants/countries";
import { ToastrService } from "ngx-toastr";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-player-details',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    PreviousButtonComponent,
    LoaderComponent,
    FormsModule
  ],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent implements OnInit {

  player: any = null;
  loading = signal(true);
  newStatus: string = '';

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.playerService.getPlayerById(id).subscribe({
      next: (res) => {
        this.player = res;
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  get countryCode(): string {
    if (!this.player?.nationality) return '';

    const country = COUNTRIES.find(
      c => c.name.toLowerCase() === this.player.nationality.toLowerCase()
    );

    return country ? country.code.toLowerCase() : '';
  }

  confirmUpdateStatus() {
    if (!this.newStatus) {
      alert("Please select a status");
      return;
    }

    this.playerService.updatePlayer(this.player.id, {
      ...this.player,
      status: this.newStatus
    }).subscribe({
      next: () => {
        this.player.status = this.newStatus;
        this.toastr.success("SUCCESS", "Status updated");

        const modal = document.getElementById('updateStatusModal');
        if (modal) {
          const bsModal = (window as any).bootstrap.Modal.getInstance(modal);
          bsModal?.hide();
        }
      },
      error: (err) => this.toastr.error("ERROR", err)
    });
  }

  confirmDelete() {
    this.playerService.deletePlayer(this.player.id)
      .subscribe({
        next: () => {

          const modal = document.getElementById('deleteModal');
          if (modal) {
            const bsModal = (window as any).bootstrap.Modal.getInstance(modal);
            bsModal?.hide();
          }

          this.toastr.success("DELETED", "Player deleted");
          this.router.navigate(['/admin/player-actions'], { replaceUrl: true });
        },
        error: (err) => this.toastr.error("ERROR", err)
      });
  }


}
