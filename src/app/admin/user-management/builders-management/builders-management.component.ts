import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserCardsComponent} from "../../../Shared/shared-ui/user-cards/user-cards.component";

@Component({
  selector: 'app-builders-management',
  imports: [
    UserCardsComponent
  ],
  templateUrl: './builders-management.component.html',
  styleUrl: './builders-management.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class BuildersManagementComponent implements OnInit{

  links = [
    { label: 'Actions', link: '/admin/builder-actions' },
    { label: 'Statistics', link: '/admin/builder-stats' },
    { label: 'Builders List', link: '/admin/builder-list' },
    { label: 'Add Builder', link: '/admin/builders-add' }
  ];

  ngOnInit() {
  }

}
