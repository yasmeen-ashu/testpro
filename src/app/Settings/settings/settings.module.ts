import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    
  ]

})
export class SettingsModule { }
