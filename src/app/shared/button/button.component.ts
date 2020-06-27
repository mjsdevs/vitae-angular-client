import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.scss'],
  template: `
  <button class="app-button">
    <ng-content></ng-content>
  </button>
  `
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
