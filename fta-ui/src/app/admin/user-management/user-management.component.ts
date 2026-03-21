import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-user-management',
  imports: [
    RouterLink
  ],
    templateUrl: './user-management.component.html',
    styleUrl: './user-management.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UserManagementComponent {

  labels: { label: string; route: string }[] = [
    { label: 'Players', route: '/players-manage' },
    { label: 'Managers', route: '/managers-manage' },
    { label: 'Teams', route: '/teams-manage' },
    { label: 'Organizer', route: '/organizers-manage' },
    { label: 'Referee', route: '/referees-manage' },
    { label: 'Supporter', route: '/supporters-manage' },
    { label: 'Builder', route: '/builders-manage' }
  ];



}
