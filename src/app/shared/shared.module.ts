import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ButtonComponent,
  ],
  exports:[
    CommonModule,
    FormsModule,
    ButtonComponent,
  ]
})
export class SharedModule { }
