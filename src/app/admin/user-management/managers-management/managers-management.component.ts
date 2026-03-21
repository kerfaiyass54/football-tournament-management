import {Component, OnInit} from '@angular/core';
import {UserCardsComponent} from "../../../Shared/shared-ui/user-cards/user-cards.component";

@Component({
  selector: 'app-managers-management',
  imports: [
    UserCardsComponent
  ],
  templateUrl: './managers-management.component.html',
  styleUrl: './managers-management.component.css',
})
export class ManagersManagementComponent implements OnInit{

  links = [
    { label: 'Actions', link: '/admin/manager-actions' },
    { label: 'Statistics', link: '/admin/manager-stats' },
    { label: 'Managers List', link: '/admin/manager-list' },
    { label: 'Add Manager', link: '/admin/managers-add' }
  ];

  ngOnInit() {
  }
}
