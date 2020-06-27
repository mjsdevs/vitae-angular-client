import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  styleUrls: ['./login-form.component.scss'],
  template: `
    <form class='login-form'>
      <fieldset>
        <app-password-field></app-password-field>
      </fieldset>
    </form>
  `,
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
