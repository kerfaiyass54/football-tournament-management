import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NavBarElement} from "../models/NavBarElement";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [
    RouterLink
  ]
})
export class NavBarComponent {
  isMenuOpen = false;
  openDropdown: number | null = null;
  accountOpen = false;
  @Input() elements: any[] = [];
  @Input() homepage: any = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.openDropdown = null;
    this.accountOpen = false;
  }

  toggleDropdown(index: number) {
    this.openDropdown = this.openDropdown === index ? null : index;
    this.accountOpen = false;
  }

  toggleAccount() {
    this.accountOpen = !this.accountOpen;
    this.openDropdown = null;
  }

  logout() {
    console.log('Logging out...');
  }
}
