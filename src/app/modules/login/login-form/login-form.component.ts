import { Component, OnInit, ElementRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
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
  loading = false;
  submitted = false;

  faUser = faUser;
  faKey = faKey;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  isFocused = false;
  isPasswordVisible = false;

  constructor(
    private formBuilder: FormBuilder,
    private elRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
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

    if (this.form.invalid) {
      return;
    }
  }
}
