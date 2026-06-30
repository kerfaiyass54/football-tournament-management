import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent
  ],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.css'
})
export class BuilderComponent {

  navbarElements = [
    {
      index: 0,
      label: 'Dashboard',
      link: '/builder/dashboard'
    },
    {
      index: 1,
      label: 'My Stadiums',
      link: '/builder/stadiums'
    },
    {
      index: 2,
      label: 'Add Stadium',
      link: '/builder/add-stadium'
    },
    {
      index: 3,
      label: 'Operations',
      link: '/builder/operations'
    },
    {
      index: 4,
      label: 'Statistics',
      link: '/builder/statistics'
    }
  ];

}
