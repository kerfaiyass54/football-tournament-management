import { Routes } from '@angular/router';

export const BUILDER_ROUTES: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component')
        .then(c => c.DashboardComponent)
  },

  {
    path: 'stadiums',
    loadComponent: () =>
      import('./my-stadiums/my-stadiums.component')
        .then(c => c.MyStadiumsComponent)
  },

  {
    path: 'add-stadium',
    loadComponent: () =>
      import('./add-stadium/add-stadium.component')
        .then(c => c.AddStadiumComponent)
  },

  {
    path: 'operations',
    loadComponent: () =>
      import('./operations/operations.component')
        .then(c => c.OperationsComponent)
  },

  {
    path: 'statistics',
    loadComponent: () =>
      import('./statistics/statistics.component')
        .then(c => c.StatisticsComponent)
  }

];
