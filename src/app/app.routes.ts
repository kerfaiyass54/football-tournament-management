import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { roleGuard } from './Shared/services/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [

      // =========================
      // ADMIN
      // =========================
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.routes').then(r => r.ADMIN_ROUTES)
      },

      // =========================
      // BUILDER
      // =========================
      {
        path: 'builder',
        canActivate: [roleGuard],
        data: { roles: ['Builder'] },
        loadComponent: () =>
          import('./builder/builder.component')
            .then(c => c.BuilderComponent)
      },

      // =========================
      // MANAGER
      // =========================
      {
        path: 'manager',
        canActivate: [roleGuard],
        data: { roles: ['Manager'] },
        loadComponent: () =>
          import('./manager/manager.component')
            .then(c => c.ManagerComponent)
      },

      // =========================
      // ORGANIZER
      // =========================
      {
        path: 'organizer',
        canActivate: [roleGuard],
        data: { roles: ['Organizer'] },
        loadComponent: () =>
          import('./organizer/organizer.component')
            .then(c => c.OrganizerComponent)
      },

      // =========================
      // PLAYER
      // =========================
      {
        path: 'player',
        canActivate: [roleGuard],
        data: { roles: ['Player'] },
        loadComponent: () =>
          import('./player/player.component')
            .then(c => c.PlayerComponent)
      },

      // =========================
      // SUPPORTER
      // =========================
      {
        path: 'supporter',
        canActivate: [roleGuard],
        data: { roles: ['Supporter'] },
        loadComponent: () =>
          import('./supporter/supporter.component')
            .then(c => c.SupporterComponent)
      },

      // =========================
      // TEAM
      // =========================
      {
        path: 'team',
        canActivate: [roleGuard],
        data: { roles: ['Team'] },
        loadComponent: () =>
          import('./team/team.component')
            .then(c => c.TeamComponent)
      },

      // =========================
      // REFEREE
      // =========================
      {
        path: 'referee',
        canActivate: [roleGuard],
        data: { roles: ['Referee'] },
        loadComponent: () =>
          import('./referee/referee.component')
            .then(c => c.RefereeComponent)
      },

      // =========================
      // NOT AUTHORIZED
      // =========================
      {
        path: 'not-authorized',
        loadComponent: () =>
          import('./no-access/no-access.component')
            .then(c => c.NoAccessComponent)
      },

      // =========================
      // 404
      // =========================
      {
        path: '**',
        redirectTo: 'not-authorized'
      }

    ]
  }
];
