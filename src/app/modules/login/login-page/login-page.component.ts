import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  template: `
    <section class="form-area">
      <img class="logo" src="assets/logo-vittae-colored.svg">
      <h1 class="phrase"> Create amazing developer resumes! </h1>
      <login-form class="login-form"></login-form>
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
