import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

import {
  PasswordFieldComponent,
  EmailFieldComponent,
  LoginFormComponent,
} from './components';

import {
  LoginPageComponent,
} from './pages';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
  ],
  declarations: [
    PasswordFieldComponent,
    EmailFieldComponent,
    LoginPageComponent,
    LoginFormComponent,
  ],
  exports: [
    PasswordFieldComponent,
    EmailFieldComponent,
    LoginPageComponent,
    LoginFormComponent,
  ],
})
export class LoginModule { }
