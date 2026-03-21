import { Injectable } from '@angular/core';
import Keycloak, { KeycloakInstance } from 'keycloak-js';

@Injectable({ providedIn: 'root' })
export class KeycloakService {
  private keycloak: KeycloakInstance;
  roles: string[] = [];

  constructor() {
    this.keycloak = new Keycloak({
      url: 'http://localhost:7080',
      realm: 'Football',
      clientId: 'football-frontend'
    });
  }

  async init(): Promise<void> {
    try {
      await this.keycloak.init({
        onLoad: 'login-required',
        checkLoginIframe: false
      });

      this.getRoles();
    } catch (err) {
      console.error('Keycloak init failed', err);
    }
  }


  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }


  getRoles(): string[] {
    const tokenParsed: any = this.keycloak.tokenParsed;
    this.roles = tokenParsed?.realm_access?.roles || [];
    return this.roles;
  }


  getToken(): string | undefined {
    return this.keycloak.token;
  }


  async updateToken(minValidity: number = 60): Promise<string> {
    try {
      await this.keycloak.updateToken(minValidity);
      return this.keycloak.token as string;
    } catch (err) {
      console.error('Failed to refresh token', err);
      await this.login();
      return this.keycloak.token as string;
    }
  }


  async login(): Promise<void> {
    await this.keycloak.login();
  }


  async logout(): Promise<void> {
    await this.keycloak.logout({ redirectUri: window.location.origin });
  }

  async loadUserProfile(): Promise<any> {
    try {
      return await this.keycloak.loadUserProfile();
    } catch (err) {
      console.error('Failed to load user profile', err);
      return null;
    }
  }


  async isLoggedIn(): Promise<boolean> {
    return await this.keycloak.authenticated ?? false;
  }
}
