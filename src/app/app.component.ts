import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-password-field></app-password-field>
    <app-email-field></app-email-field>
  `
})
export class AppComponent {
  title = 'vitae-angular-client';
}
