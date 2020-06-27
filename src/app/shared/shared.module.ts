import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [
    ButtonComponent,
  ],
  exports:[
    CommonModule,
    FormsModule,
    ButtonComponent,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
