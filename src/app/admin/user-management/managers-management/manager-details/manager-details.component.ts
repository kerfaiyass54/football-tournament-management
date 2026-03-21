import { Component, ChangeDetectionStrategy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from '../../../services/manager.service';
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";
import { LoaderComponent } from "../../../../components/loader/loader.component";
import { COUNTRIES } from "../../../../Shared/constants/countries";
import { ToastrService } from "ngx-toastr";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-manager-details',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    PreviousButtonComponent,
    LoaderComponent,
    FormsModule
  ],
  templateUrl: './manager-details.component.html',
  styleUrl: './manager-details.component.css'
})
export class ManagerDetailsComponent implements OnInit {

  manager: any = null;
  loading = signal(true);
  newStatus: any = '';

  constructor(
    private route: ActivatedRoute,
    private managerService: ManagerService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.managerService.getManagerById(id).subscribe({
      next: (res) => {
        this.manager = res;
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  get countryCode(): string {
    if (!this.manager?.nationality) return '';

    const country = COUNTRIES.find(
      c => c.name.toLowerCase() === this.manager.nationality.toLowerCase()
    );

    return country ? country.code.toLowerCase() : '';
  }

  confirmUpdateStatus() {
    if (!this.newStatus) {
      alert("Please select a status");
      return;
    }

    this.managerService.changeStatus(this.manager.id, this.newStatus)
      .subscribe({
        next: () => {
          this.manager.status = this.newStatus;
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
    // this.managerService.deleteManager(this.manager.id)
    //   .subscribe({
    //     next: () => {
    //       this.router.navigate(['/admin/manager-actions'], { replaceUrl: true });
    //       this.toastr.success("DELETED", "Manager deleted");
    //     },
    //     error: (err) => this.toastr.error("ERROR", err)
    //   });
  }
}
