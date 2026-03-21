import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CustomListComponent } from "../../../Shared/shared-ui/custom-list/custom-list.component";
import { PreviousButtonComponent } from "../../../components/buttons/previous-button/previous-button.component";
import { TableColumn } from "../../../components/generic-table/generic-table.component";
import { LOCATION_TABLE_COLUMNS } from "../../../Shared/constants/location.constants";
import { LocationService } from "../../services/location.service";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-locations-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CustomListComponent,
    PreviousButtonComponent
  ],
  templateUrl: './all-locations-list.component.html',
  styleUrl: './all-locations-list.component.css',
})
export class AllLocationsListComponent implements OnInit {

  columns: TableColumn<any>[] = LOCATION_TABLE_COLUMNS;

  data = signal<any[]>([]);
  page = signal(1);
  size = 5; // constant is fine
  totalElements = signal(0);

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations() {
    this.locationService
      .getPaged(this.page() - 1, this.size)
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (res: any) => {
          this.data.set(res.content);
          this.totalElements.set(res.totalElements);
        },
        error: (err: any) => {
          console.error('Error loading locations:', err);
        }
      });
  }

  onPageChange(newPage: number) {
    this.page.set(newPage);
    this.loadLocations();
  }
}
