import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@modules/page-not-found/page-not-found.component';


export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './modules/auth.module#AuthModule'
  },
  { path: '**', component: PageNotFoundComponent },
];
