import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '@shared/shared.module';

import { PasswordFieldComponent } from './password-field/password-field.component';
import { EmailFieldComponent } from './email-field/email-field.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    PasswordFieldComponent,
    EmailFieldComponent,
    LoginFormComponent,
  ],
  exports: [
    PasswordFieldComponent,
    EmailFieldComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
  ]
})
export class LoginModule { }
