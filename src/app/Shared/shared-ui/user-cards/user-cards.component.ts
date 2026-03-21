import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {PreviousButtonComponent} from "../../../components/buttons/previous-button/previous-button.component";


@Component({
  selector: 'app-user-cards',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    PreviousButtonComponent
  ],
  templateUrl: './user-cards.component.html',
  styleUrl: './user-cards.component.css',
})
export class UserCardsComponent {

  @Input() cardsLinks: any[] = [];



}
