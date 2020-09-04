import { Routes } from '@angular/router';
import { AuthPageComponent } from '@modules/auth/auth-page/auth-page.component';
import { LogInComponent } from '@modules/auth/log-in/log-in.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
    children: [
      { path: 'login', component: LogInComponent },
      { path: '**', redirectTo: 'login' },
    ]
  },
];
