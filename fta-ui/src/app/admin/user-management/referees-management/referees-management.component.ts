import { Component, ChangeDetectionStrategy, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GenericTableComponent } from '../../../components/generic-table/generic-table.component';
import { PreviousButtonComponent } from '../../../components/buttons/previous-button/previous-button.component';
import { RefereeService } from '../../services/referee.service';
import { REFEREE_TABLE_COLUMNS } from '../../../Shared/constants/referee.constants';


@Component({
  selector: 'app-referees-management',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    GenericTableComponent,
    PreviousButtonComponent
  ],
  templateUrl: './referees-management.component.html',
  styleUrl: './referees-management.component.css'
})
export class RefereesManagementComponent implements OnInit {

  constructor(private refereeService: RefereeService) {}

  referees = signal<any[]>([]);
  selectedReferees = signal<any[]>([]);
  searchTerm = signal('');

  refereeName = '';
  refereeNationality = '';

  columns = REFEREE_TABLE_COLUMNS;

  ngOnInit(): void {}

  filteredReferees = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.referees();

    return this.referees().filter(r =>
      Object.values(r).some(val =>
        String(val).toLowerCase().includes(term)
      )
    );
  });

  onSelectionChange(data: any[]) {
    this.selectedReferees.set(data);
  }

  confirmAddReferee() {
    if (!this.refereeName.trim() || !this.refereeNationality.trim()) return;

    this.refereeService.addReferee({
      name: this.refereeName,
      nationality: this.refereeNationality
    }).subscribe(() => {
      this.loadRefereeByName(this.refereeName);
      this.resetForm();
    });
  }

  loadRefereeByName(name: string) {
    this.refereeService.getRefereeByName(name).subscribe(res => {
      this.referees.set([res]);
    });
  }

  deleteReferee() {
    const referee = this.selectedReferees()[0];
    if (!referee) return;

    this.refereeService.deleteReferee(referee.id!).subscribe(() => {
      this.referees.set([]);
    });
  }

  resetForm() {
    this.refereeName = '';
    this.refereeNationality = '';
  }
}
