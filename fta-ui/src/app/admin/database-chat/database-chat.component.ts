import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-database-chat',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink
  ],
  templateUrl: './database-chat.component.html',
  styleUrl: './database-chat.component.css',
})
export class DatabaseChatComponent {

  labels: { label: string; route: string }[] = [
    { label: 'Player', route: '/player' },
    { label: 'Manager', route: '/manager' },
    { label: 'Teams', route: '/team' },
    { label: 'Organizer', route: '/organizer' },
    { label: 'Referee', route: '/referees' },
    { label: 'Supporter', route: '/supporter' },
    { label: 'Builder', route: '/builder' }
  ];

}
