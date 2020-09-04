import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AUTH_ROUTES } from './auth.routes';
import { LogInComponent } from './log-in/log-in.component';


@NgModule({
  declarations: [
    LogInComponent,
    AuthPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(AUTH_ROUTES),
  ],
})
export class AuthModule { }
