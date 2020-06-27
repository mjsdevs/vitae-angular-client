import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PasswordFieldComponent } from './password-field/password-field.component';
import { EmailFieldComponent } from './email-field/email-field.component';

@NgModule({
  declarations: [
    PasswordFieldComponent,
    EmailFieldComponent,
  ],
  exports: [
    PasswordFieldComponent,
    EmailFieldComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class LoginModule { }
