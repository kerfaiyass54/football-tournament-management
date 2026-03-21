import { Component, ChangeDetectionStrategy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../../../services/team.service';
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";
import { LoaderComponent } from "../../../../components/loader/loader.component";
import { ToastrService } from "ngx-toastr";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-team-details',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    PreviousButtonComponent,
    LoaderComponent,
    FormsModule
  ],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css'
})
export class TeamDetailsComponent implements OnInit {

  team: any = null;
  loading = signal(true);
  newStatus: string = '';

  statuses: string[] = ['BANNED', 'CAN_PLAY', 'CLOSED'];

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.teamService.getTeamById(id).subscribe({
      next: (res: any) => {
        this.team = res;
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  /* =========================
     🔄 UPDATE STATUS
  ========================== */

  confirmUpdateStatus() {
    if (!this.newStatus) {
      alert("Please select a status");
      return;
    }

    this.teamService.changeStatus(this.team.id, this.newStatus)
      .subscribe({
        next: () => {
          this.team.status = this.newStatus;
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

  /* =========================
     🗑 DELETE
  ========================== */

  confirmDelete() {
    this.teamService.deleteTeam(this.team.id)
      .subscribe({
        next: () => {

          const modal = document.getElementById('deleteModal');
          if (modal) {
            const bsModal = (window as any).bootstrap.Modal.getInstance(modal);
            bsModal?.hide();
          }

          this.toastr.success("DELETED", "Team deleted");
          this.router.navigate(['/admin/team-actions'], { replaceUrl: true });
        },
        error: (err) => this.toastr.error("ERROR", err)
      });
  }

}
