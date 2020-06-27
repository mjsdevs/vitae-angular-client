import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  styleUrls: ['./login-form.component.scss'],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <fieldset class="fields">
        <app-email-field></app-email-field>
        <app-password-field></app-password-field>
      </fieldset>
      <div class="row">
        <app-button> Sign Up </app-button>
      </div>
    </form>
  `,
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  }
}
