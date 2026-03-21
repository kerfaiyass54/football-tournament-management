import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {KeycloakService} from "../keycloak.service";

export const roleGuard: CanActivateFn = async (route, state) => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  const loggedIn = await keycloak.isLoggedIn();
  if (!loggedIn) {
    await keycloak.login();
    return false;
  }


  const requiredRoles = route.data['roles'] as string[];
  if (!requiredRoles || requiredRoles.length === 0) return true;

  const hasAccess = requiredRoles.some(r => keycloak.hasRole(r));
  if (!hasAccess) {
    router.navigate(['/not-authorized']);
    return false;
  }

  return true;
};
