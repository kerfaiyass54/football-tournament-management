import {Component, OnInit} from '@angular/core';
import {UserCardsComponent} from "../../../Shared/shared-ui/user-cards/user-cards.component";

@Component({
  selector: 'app-teams-management',
  imports: [
    UserCardsComponent
  ],
  templateUrl: './teams-management.component.html',
  styleUrl: './teams-management.component.css',
})
export class TeamsManagementComponent implements OnInit{

  links = [
    { label: 'Actions', link: '/admin/team-actions' },
    { label: 'Statistics', link: '/admin/team-stats' },
    { label: 'Teams List', link: '/admin/team-list' },
    { label: 'Add Team', link: '/admin/teams-add' }
  ];

  ngOnInit() {
  }

}
