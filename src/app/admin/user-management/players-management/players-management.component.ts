import {Component, OnInit} from '@angular/core';
import {UserCardsComponent} from "../../../Shared/shared-ui/user-cards/user-cards.component";

@Component({
  selector: 'app-players-management',
  imports: [
    UserCardsComponent
  ],
  templateUrl: './players-management.component.html',
  styleUrl: './players-management.component.css',
})
export class PlayersManagementComponent implements OnInit {

  links = [
    { label: 'Actions', link: '/admin/player-actions' },
    { label: 'Statistics', link: '/admin/player-stats' },
    { label: 'Players List', link: '/admin/player-list' },
    { label: 'Add Player', link: '/admin/players-add' }
  ];

  ngOnInit() {
  }


}
