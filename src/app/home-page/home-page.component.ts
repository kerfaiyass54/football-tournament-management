import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {KeycloakService} from "../Shared/services/keycloak.service";
import {Router, RouterOutlet} from "@angular/router";


@Component({
    selector: 'app-home-page',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
  ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  roles:string[] = [];

  constructor(private keyloak: KeycloakService, private router: Router) {
  }


  ngOnInit() {
    this.roles = this.keyloak.getRoles();
    console.log(this.roles);}

  access(){

    if(this.roles.includes('admin')){
      this.router.navigate(['/admin']);
    }
    else if(this.roles.includes('supporter')){
      this.router.navigate(['/supporter']);
    }

    else if(this.roles.includes('team')){
      this.router.navigate(['/team']);
    }

    else if(this.roles.includes('player')){
      this.router.navigate(['/player']);
    }
    else if(this.roles.includes('organizer')){
      this.router.navigate(['/organizer']);
    }
    else if(this.roles.includes('referee')){
      this.router.navigate(['/referee']);
    }
    else if(this.roles.includes('manager')){
      this.router.navigate(['/manager']);
    }else if(this.roles.includes('builder')){
      this.router.navigate(['/builder']);
    }
    else{
      this.router.navigate(['/not-authorized']);
    }
  }
}
