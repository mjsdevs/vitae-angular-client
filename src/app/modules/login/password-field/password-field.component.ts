import { Component, OnInit, ElementRef } from '@angular/core';
import { faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-field',
  styleUrls: ['./password-field.component.scss'],
  template: `
  <div class="icon"> <fa-icon [icon]="faKey"></fa-icon> </div>
  <input
    class="field-input"
    [type]="isPasswordVisible ? 'text' : 'password'"
    (focus)="toggleFocus()"
    (blur)="toggleFocus()"
    placeholder="Password"
  />
  <button class='visibility-btn' (click)="toggleVisibility()">
    <fa-icon [icon]='isPasswordVisible ? faEyeSlash : faEye'>
    </fa-icon>
  </button>
  `
})
export class PasswordFieldComponent implements OnInit {
  faKey = faKey;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  isPasswordVisible: boolean;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.isPasswordVisible = false;
  }

  public toggleVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleFocus() {
    this.elRef
      .nativeElement
      .classList
      .toggle('is-focused');
  }
}
