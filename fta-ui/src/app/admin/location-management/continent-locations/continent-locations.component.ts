import {Component, OnInit, signal, computed, ChangeDetectionStrategy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GenericTableComponent } from '../../../components/generic-table/generic-table.component';
import { PreviousButtonComponent } from '../../../components/buttons/previous-button/previous-button.component';
import { LocationService } from '../../services/location.service';
import { LOCATION_TABLE_COLUMNS } from '../../../Shared/constants/location.constants';
import {AFRICA, AMERICA, ASIA, Country, EUROPE, SOUTH_AMERICA} from "../../../Shared/constants/countries";


@Component({
  selector: 'app-continent-locations',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    GenericTableComponent,
    PreviousButtonComponent
  ],
  templateUrl: './continent-locations.component.html',
  styleUrl: './continent-locations.component.css',
})
export class ContinentLocationsComponent implements OnInit {

  countries: Country[] = [];
  selectedCountry = '';

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute
  ) {}

  continent = '';

  locations = signal<any[]>([]);
  selectedLocations = signal<any[]>([]);
  searchTerm = signal('');

  // DTO fields
  locationName = '';
  country = '';

  columns = LOCATION_TABLE_COLUMNS;

  page = 0;
  size = 5;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.continent = params.get('continent') || '';
      this.loadLocations();
      this.setCountriesByContinent();

    });
  }

  setCountriesByContinent() {
    switch (this.continent.toUpperCase()) {
      case 'AFRICA':
        this.countries = AFRICA;
        break;
      case 'EUROPE':
        this.countries = EUROPE;
        break;
      case 'ASIA':
        this.countries = ASIA;
        break;
      case 'AMERICA':
        this.countries = AMERICA;
        break;
      case 'SOUTH_AMERICA':
        this.countries = SOUTH_AMERICA;
        break;
      default:
        this.countries = [];
    }
  }


  // LOAD BY CONTINENT (PAGED)

  loadLocations() {
    this.locationService
      .getByContinent(this.continent, this.page, this.size)
      .subscribe(res => {
        this.locations.set(res.content); // because it's paged
      });
  }


  // FILTER

  filteredLocations = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.locations();

    return this.locations().filter(l =>
      Object.values(l).some(val =>
        String(val).toLowerCase().includes(term)
      )
    );
  });


  // TABLE SELECTION

  onSelectionChange(data: any[]) {
    this.selectedLocations.set(data);
  }


  // ADD

  confirmAddLocation() {
    if (!this.locationName.trim() || !this.selectedCountry) return;

    const dto = {
      name: this.locationName,
      country: this.selectedCountry,
      continent: this.continent
    };

    this.locationService.create(dto).subscribe(() => {
      this.loadLocations();
      this.resetForm();
    });
  }


  // DELETE (by name)

  deleteLocation() {
    const location = this.selectedLocations()[0];
    if (!location) return;

    this.locationService.delete(location.name).subscribe(() => {
      this.loadLocations();
    });
  }

  resetForm() {
    this.locationName = '';
    this.selectedCountry = '';
  }
}
