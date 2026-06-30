import { Routes } from '@angular/router';
import { roleGuard } from '../Shared/services/guard/auth.guard';

export const BUILDER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./builder.component').then(c => c.BuilderComponent),

    canActivate: [roleGuard],
    data: { roles: ['Builder'] },

    children: [
      // ================= HOME =================
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard.component')
            .then(c => c.DashboardComponent)
      },

      // ================= STADIUMS =================
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

      // ================= OPERATIONS =================
      {
        path: 'operations',
        loadComponent: () =>
          import('./operations/operations.component')
            .then(c => c.OperationsComponent)
      },

      // ================= STATISTICS =================
      {
        path: 'statistics',
        loadComponent: () =>
          import('./statistics/statistics.component')
            .then(c => c.StatisticsComponent)
      }
    ]
  }
];
