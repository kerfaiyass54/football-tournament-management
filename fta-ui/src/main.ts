import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {KeycloakService} from "./app/Shared/services/keycloak.service";
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import { provideHttpClient } from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import Aura from "@primeuix/themes/aura";
import {providePrimeNG} from "primeng/config";
import {provideToastr} from "ngx-toastr";

const keycloakService = new KeycloakService();



keycloakService.init().then(() => {
  bootstrapApplication(AppComponent, {
    providers: [provideToastr({
      positionClass: 'toast-top-right',
      timeOut: 3000,
      preventDuplicates: true,
      closeButton: true,
      progressBar: true
    }),
      provideZoneChangeDetection(),provideRouter(routes),provideHttpClient(),provideAnimations(),providePrimeNG({
        theme: {
          preset: Aura
        }
      }),
      { provide: KeycloakService, useValue: keycloakService }
    ]
  }).catch(err => console.error(err));
}).catch(err => console.error('Keycloak init failed', err));
