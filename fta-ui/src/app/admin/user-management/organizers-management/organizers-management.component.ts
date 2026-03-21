import {Component, computed, OnInit, signal} from '@angular/core';
import {OrganizerService} from "../../services/organizer.service";
import {ORGANIZER_TABLE_COLUMNS} from "../../../Shared/constants/organizer.constants";
import {FormsModule} from "@angular/forms";
import {GenericTableComponent} from "../../../components/generic-table/generic-table.component";
import {PreviousButtonComponent} from "../../../components/buttons/previous-button/previous-button.component";

@Component({
  selector: 'app-organizers-management',
  imports: [
    FormsModule,
    GenericTableComponent,
    PreviousButtonComponent
  ],
  templateUrl: './organizers-management.component.html',
  styleUrl: './organizers-management.component.css',
})
export class OrganizersManagementComponent implements OnInit {

  constructor(private organizerService: OrganizerService) {}

  searchTerm = signal('');
  selectedOrganizers = signal<any[]>([]);
  organizers = signal<any[]>([]);
  selectedOrganizerId: number | null = null;

  organizerName: string = '';

  columns = ORGANIZER_TABLE_COLUMNS;

  ngOnInit(): void {
    this.loadOrganizers();
  }

  confirmAddOrganizer() {
    if (!this.organizerName.trim()) return;

    this.organizerService.addOrganizer(this.organizerName).subscribe(() => {
      this.loadOrganizers();
      this.organizerName = '';
    });
  }

  loadOrganizers() {
    this.organizerName = '';
    this.organizerService.getOrganizers(0, 20).subscribe({
      next: (res: any) => {
        this.organizers.set(res.content);
      },
      error: (err: any) => console.error(err)
    });
  }

  filteredOrganizers = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.organizers();

    return this.organizers().filter(o =>
      Object.values(o).some(val =>
        String(val).toLowerCase().includes(term)
      )
    );
  });

  onSelectionChange(data: any[]) {
    this.selectedOrganizers.set(data);
  }

  addOrganizer() {
    // You will open Bootstrap modal here
    console.log('Open Add Organizer modal');
  }

  updateOrganizer() {
    const organizer = this.selectedOrganizers()[0];
    if (!organizer) return;
    this.selectedOrganizerId = organizer.id;
    if (!this.selectedOrganizerId || !this.organizerName.trim()) return;
    this.organizerService.updateOrganizer(
      this.selectedOrganizerId,
      this.organizerName
    ).subscribe(() => {
      this.loadOrganizers();
    });
  }

  deleteOrganizer() {
    const organizer = this.selectedOrganizers()[0];
    if (!organizer) return;
    this.selectedOrganizerId = organizer.id;
    this.organizerService.deleteOrganizer(this.selectedOrganizerId).subscribe(
      ()=>{
        this.loadOrganizers();
      }
    )
  }
}
