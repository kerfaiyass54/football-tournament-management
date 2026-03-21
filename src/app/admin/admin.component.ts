import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavBarComponent} from "../components/nav-bar/nav-bar.component";

@Component({
    selector: 'app-admin',
  imports: [
    RouterOutlet,
    NavBarComponent
  ],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css'
})
export class AdminComponent {

  navbarElements = [
    {index: 0, label: 'Users', link: '/admin/users'},
    {index: 1, label: 'Locations', link: '/admin/locations'},
    {index: 2, label: 'Data chatting', link: '/admin/database-chat'}
  ];


}
