import { Component, OnInit, ElementRef } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

import {
  faUser,
  faKey,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'login-form',
  styleUrls: ['./login-form.component.scss'],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl;

  loading = false;
  submitted = false;

  faUser = faUser;
  faKey = faKey;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  isFocused = false;
  isPasswordVisible = false;

  constructor() { }

  ngOnInit(): void {
    this.emailControl = new FormControl('', [
      Validators.email,
      Validators.required,
    ]);

    this.passwordControl = new FormControl('', [
      Validators.required,
    ]);

    this.form = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  get isEmailValid() {
    return this.emailControl.valid || this.emailControl.untouched;
  }

  get isPasswordValid() {
    return this.passwordControl.valid || this.passwordControl.untouched;
  }

  toggleFocus(fieldRef: Element) {
    fieldRef
    .classList
    .toggle('is-focused');
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    this.submitted = true;
  }
}
