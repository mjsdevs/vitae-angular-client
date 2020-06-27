import { Component, OnInit, ElementRef } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-email-field',
  styleUrls: ['./email-field.component.scss'],
  template: `
  <div class="icon"> <fa-icon [icon]="faUser"></fa-icon> </div>
  <input
    class="field-input"
    type="text"
    (focus)="toggleFocus()"
    (blur)="toggleFocus()"
    formControlName="username"
    placeholder="Email"
  />
  `
})
export class EmailFieldComponent implements OnInit {

  faUser = faUser;
  isFocused = false;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
  }

  toggleFocus() {
    this.elRef
      .nativeElement
      .classList
      .toggle('is-focused');
  }
}
