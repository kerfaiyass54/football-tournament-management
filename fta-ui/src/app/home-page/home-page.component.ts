import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import {
  Router,
  RouterOutlet
} from '@angular/router';

import { KeycloakService } from '../Shared/services/keycloak.service';
import { UserServices } from '../Shared/services/user-services';
import { CurrentUserService } from '../Shared/services/current-user.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

  roles: string[] = [];

  loading = true;

  error = '';

  constructor(
    private keycloak: KeycloakService,
    private router: Router,
    private userService: UserServices,
    private currentUserService: CurrentUserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.roles = this.keycloak.getRoles();

    console.log('Roles:', this.roles);

    const username = this.keycloak.getUsername();

    console.log('Username:', username);

    if (!username) {

      this.error = 'Username not found';

      this.loading = false;

      this.cdr.detectChanges();

      return;
    }

    this.loadUser();
  }

  private loadUser(): void {


    this.access();
  }

  access(): void {

    this.loading = false;

    this.cdr.detectChanges();

    if (this.roles.includes('Admin')) {

      this.router.navigate(['/admin']);
    }

    else if (this.roles.includes('Supporter')) {

      this.router.navigate(['/supporter']);
    }

    else if (this.roles.includes('Organizer')) {

      this.router.navigate(['/organizer']);
    }

    else if (this.roles.includes('Referee')) {

      this.router.navigate(['/referee']);
    }

    else if (this.roles.includes('Builder')) {

      this.router.navigate(['/builder']);
    }

    else {

      this.router.navigate(['/not-authorized']);
    }
  }
}
