import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-location-management',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './location-management.component.html',
  styleUrl: './location-management.component.css',
})
export class LocationManagementComponent {

  labels = signal([
    { title: 'All', link: '/admin/locations-list' },
    { title: 'AFRICA', link: '/admin/list-location/AFRICA' },
    { title: 'ASIA', link: '/admin/list-location/ASIA' },
    { title: 'EUROPE', link: '/admin/list-location/EUROPE' },
    { title: 'AMERICA', link: '/admin/list-location/AMERICA' },
    { title: 'SOUTH_AMERICA', link: '/admin/list-location/SOUTH_AMERICA' }
  ]);

}
