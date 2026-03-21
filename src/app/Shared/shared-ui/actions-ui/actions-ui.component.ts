import { Component, ChangeDetectionStrategy, computed, signal, OnInit } from '@angular/core';
import { GenericTableComponent, TableColumn } from "../../../components/generic-table/generic-table.component";
import { FormsModule } from "@angular/forms";
import {BuilderService} from "../../../admin/services/builder.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-actions-ui',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    GenericTableComponent
  ],
  templateUrl: './actions-ui.component.html',
  styleUrl: './actions-ui.component.css',
})
export class ActionsUiComponent implements OnInit {

  constructor(private builderService: BuilderService, private router: Router) {}

  searchTerm = signal('');

  // Selected rows
  selectedUsers = signal<any[]>([]);

  // ✅ Replace users with builders
  users = signal<any[]>([]);

  // ✅ UPDATED COLUMNS FOR BUILDER
  columns: TableColumn<any>[] = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'nationality', label: 'Nationality', sortable: true },
    { key: 'expertise', label: 'Expertise', sortable: true },
    { key: 'yearEstablished', label: 'Established', sortable: true },
    { key: 'price', label: 'Price', sortable: true }
  ];

  ngOnInit(): void {
    this.loadBuilders();
  }

  loadBuilders() {
    this.builderService.getAll(0, 20).subscribe({
      next: (res: any) => {
        this.users.set(res.content);
      },
      error: (err:any) => console.error(err)
    });
  }

  // Filtered data (external search)
  filteredUsers = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.users();

    return this.users().filter(u =>
      Object.values(u).some(val =>
        String(val).toLowerCase().includes(term)
      )
    );
  });

  onSelectionChange(users: any[]) {
    this.selectedUsers.set(users);
  }

  seeDetails() {
    const user = this.selectedUsers()[0];
    if (!user) return;
    this.router.navigate(['/admin/details-builders', user.id]);
    console.log('Selected builder:', user);
  }
}
