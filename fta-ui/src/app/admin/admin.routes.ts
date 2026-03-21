import { Routes } from '@angular/router';
import { roleGuard } from '../Shared/services/guard/auth.guard';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./admin.component').then(m => m.AdminComponent),

    canActivate: [roleGuard],
    data: { roles: ['admin'] },

    children: [

      // ================= HOME =================
      {
        path: '',
        loadComponent: () =>
          import('./admin-home/admin-home.component')
            .then(m => m.AdminHomeComponent)
      },

      // ================= USERS =================
      {
        path: 'users',
        loadComponent: () =>
          import('./user-management/user-management.component')
            .then(m => m.UserManagementComponent)
      },

      // ================= LOCATIONS =================
      {
        path: 'locations',
        loadComponent: () =>
          import('./location-management/location-management.component')
            .then(m => m.LocationManagementComponent)
      },
      {
        path: 'locations-list',
        loadComponent: () =>
          import('./location-management/all-locations-list/all-locations-list.component')
            .then(m => m.AllLocationsListComponent)
      },
      {
        path: 'list-location/:continent',
        loadComponent: () =>
          import('./location-management/continent-locations/continent-locations.component')
            .then(m => m.ContinentLocationsComponent)
      },

      // ================= BUILDERS =================
      {
        path: 'builders-manage',
        loadComponent: () =>
          import('./user-management/builders-management/builders-management.component')
            .then(m => m.BuildersManagementComponent)
      },
      {
        path: 'builder-actions',
        loadComponent: () =>
          import('./user-management/builders-management/builders-actions/builders-actions.component')
            .then(m => m.BuildersActionsComponent)
      },
      {
        path: 'builder-stats',
        loadComponent: () =>
          import('./user-management/builders-management/builders-stat/builders-stat.component')
            .then(m => m.BuildersStatComponent)
      },
      {
        path: 'builder-list',
        loadComponent: () =>
          import('./user-management/builders-management/builders-list/builders-list.component')
            .then(m => m.BuildersListComponent)
      },
      {
        path: 'builders-add',
        loadComponent: () =>
          import('./user-management/builders-management/builders-adding/builders-adding.component')
            .then(m => m.BuildersAddingComponent)
      },
      {
        path: 'details-builders/:id',
        loadComponent: () =>
          import('./user-management/builders-management/builder-details/builder-details.component')
            .then(m => m.BuilderDetailsComponent)
      },

      // ================= MANAGERS =================
      {
        path: 'managers-manage',
        loadComponent: () =>
          import('./user-management/managers-management/managers-management.component')
            .then(m => m.ManagersManagementComponent)
      },
      {
        path: 'manager-details/:id',
        loadComponent: () =>
          import('./user-management/managers-management/manager-details/manager-details.component')
            .then(m => m.ManagerDetailsComponent)
      },
      {
        path: 'manager-actions',
        loadComponent: () =>
          import('./user-management/managers-management/managers-actions/managers-actions.component')
            .then(m => m.ManagersActionsComponent)
      },
      {
        path: 'manager-stats',
        loadComponent: () =>
          import('./user-management/managers-management/managers-stat/managers-stat.component')
            .then(m => m.ManagersStatComponent)
      },
      {
        path: 'manager-list',
        loadComponent: () =>
          import('./user-management/managers-management/managers-list/managers-list.component')
            .then(m => m.ManagersListComponent)
      },
      {
        path: 'managers-add',
        loadComponent: () =>
          import('./user-management/managers-management/managers-adding/managers-adding.component')
            .then(m => m.ManagersAddingComponent)
      },

      // ================= PLAYERS =================
      {
        path: 'players-manage',
        loadComponent: () =>
          import('./user-management/players-management/players-management.component')
            .then(m => m.PlayersManagementComponent)
      },
      {
        path: 'player-details/:id',
        loadComponent: () =>
          import('./user-management/players-management/player-details/player-details.component')
            .then(m => m.PlayerDetailsComponent)
      },
      {
        path: 'player-actions',
        loadComponent: () =>
          import('./user-management/players-management/players-actions/players-actions.component')
            .then(m => m.PlayersActionsComponent)
      },
      {
        path: 'player-stats',
        loadComponent: () =>
          import('./user-management/players-management/players-stat/players-stat.component')
            .then(m => m.PlayersStatComponent)
      },
      {
        path: 'player-list',
        loadComponent: () =>
          import('./user-management/players-management/players-list/players-list.component')
            .then(m => m.PlayersListComponent)
      },
      {
        path: 'players-add',
        loadComponent: () =>
          import('./user-management/players-management/players-adding/players-adding.component')
            .then(m => m.PlayersAddingComponent)
      },

      // ================= TEAMS =================
      {
        path: 'teams-manage',
        loadComponent: () =>
          import('./user-management/teams-management/teams-management.component')
            .then(m => m.TeamsManagementComponent)
      },
      {
        path: 'team-details/:id',
        loadComponent: () =>
          import('./user-management/teams-management/team-details/team-details.component')
            .then(m => m.TeamDetailsComponent)
      },
      {
        path: 'team-actions',
        loadComponent: () =>
          import('./user-management/teams-management/teams-actions/teams-actions.component')
            .then(m => m.TeamsActionsComponent)
      },
      {
        path: 'team-stats',
        loadComponent: () =>
          import('./user-management/teams-management/teams-stat/teams-stat.component')
            .then(m => m.TeamsStatComponent)
      },
      {
        path: 'team-list',
        loadComponent: () =>
          import('./user-management/teams-management/teams-list/teams-list.component')
            .then(m => m.TeamsListComponent)
      },
      {
        path: 'teams-add',
        loadComponent: () =>
          import('./user-management/teams-management/teams-adding/teams-adding.component')
            .then(m => m.TeamsAddingComponent)
      },

      // ================= CHAT =================
      {
        path: 'database-chat',
        loadComponent: () =>
          import('./database-chat/database-chat.component')
            .then(m => m.DatabaseChatComponent)
      },
      {
        path: 'chatting-ui/:database',
        loadComponent: () =>
          import('./chatting-ui/chatting-ui.component')
            .then(m => m.ChattingUiComponent)
      }

    ]
  }
];
