import { Component, ChangeDetectionStrategy, computed, signal, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import {GenericTableComponent} from "../../../../components/generic-table/generic-table.component";
import {ManagerService} from "../../../services/manager.service";
import {MANAGER_TABLE_COLUMNS} from "../../../../Shared/constants/manager.constants";
import {PreviousButtonComponent} from "../../../../components/buttons/previous-button/previous-button.component";

@Component({
  selector: 'app-managers-actions',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    GenericTableComponent,
    PreviousButtonComponent
  ],
  templateUrl: './managers-actions.component.html',
  styleUrl: './managers-actions.component.css',
})
export class ManagersActionsComponent implements OnInit {

  constructor(private managerService: ManagerService, private router: Router) {}

  searchTerm = signal('');
  selectedManagers = signal<any[]>([]);
  managers = signal<any[]>([]);

  // ✅ MANAGER COLUMNS
  columns = MANAGER_TABLE_COLUMNS;

  ngOnInit(): void {
    this.loadManagers();
  }

  loadManagers() {
    this.managerService.getManagers(0, 20).subscribe({
      next: (res: any) => {
        this.managers.set(res.content);
      },
      error: (err: any) => console.error(err)
    });
  }

  filteredManagers = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.managers();

    return this.managers().filter(m =>
      Object.values(m).some(val =>
        String(val).toLowerCase().includes(term)
      )
    );
  });

  onSelectionChange(data: any[]) {
    this.selectedManagers.set(data);
  }

  seeDetails() {
    const manager = this.selectedManagers()[0];
    if (!manager) return;

    this.router.navigate(['/admin/manager-details', manager.id]);
  }
}
