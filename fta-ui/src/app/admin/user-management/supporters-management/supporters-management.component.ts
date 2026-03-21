import { Component, ChangeDetectionStrategy, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GenericTableComponent } from '../../../components/generic-table/generic-table.component';
import { PreviousButtonComponent } from '../../../components/buttons/previous-button/previous-button.component';
import { SupporterService } from '../../services/supporter.service';
import { SUPPORTER_TABLE_COLUMNS } from '../../../Shared/constants/supporter.constants';

@Component({
  selector: 'app-supporters-management',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    GenericTableComponent,
    PreviousButtonComponent
  ],
  templateUrl: './supporters-management.component.html',
  styleUrl: './supporters-management.component.css',
})
export class SupportersManagementComponent implements OnInit {

  constructor(private supporterService: SupporterService) {}

  searchTerm = signal('');
  supporters = signal<any[]>([]);
  selectedSupporters = signal<any[]>([]);
  selectedSupporterId: string | null = null;

  supporterName: string = '';
  supporterNationality: string = '';
  locationName: string = '';

  columns = SUPPORTER_TABLE_COLUMNS;

  ngOnInit(): void {
    this.loadSupporters();
  }

  loadSupporters() {
    this.supporterService.getAllSupportersPaged(0, 20).subscribe({
      next: (res: any) => {
        this.supporters.set(res.content);
      },
      error: err => console.error(err)
    });
  }

  filteredSupporters = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.supporters();

    return this.supporters().filter(s =>
      Object.values(s).some(val =>
        String(val).toLowerCase().includes(term)
      )
    );
  });

  onSelectionChange(data: any[]) {
    this.selectedSupporters.set(data);
  }

  confirmAddSupporter() {
    if (!this.supporterName.trim() || !this.supporterNationality.trim()) return;

    this.supporterService.addSupporter({
      name: this.supporterName,
      nationality: this.supporterNationality
    }).subscribe(() => {
      this.loadSupporters();
      this.supporterName = '';
      this.supporterNationality = '';
    });
  }


  deleteSupporter() {
    const supporter = this.selectedSupporters()[0];
    if (!supporter) return;

    this.selectedSupporterId = supporter.id;

    this.supporterService.deleteSupporter(this.selectedSupporterId!).subscribe(() => {
      this.loadSupporters();
    });
  }

  assignLocation() {
    const supporter = this.selectedSupporters()[0];
    if (!supporter || !this.locationName.trim()) return;

    this.supporterService.assignLocation({
      name: supporter.name,
      locationName: this.locationName
    }).subscribe(() => {
      this.loadSupporters();
      this.locationName = '';
    });
  }
}
