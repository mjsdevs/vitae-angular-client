import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  template: `
    <section class="form-area">
      <app-login-form class="login-form"></app-login-form>
    </section>

    <section class="banner">
    </section>
  `,
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
