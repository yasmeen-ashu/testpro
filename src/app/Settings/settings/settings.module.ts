import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouritePostComponent } from './favourite-Post/favourite-post.component';
// import { MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import {MatChipsModule} from '@angular/material/chips';
import { MypostComponent } from './mypost/mypost.component';


@NgModule({
  declarations: [
    FavouritePostComponent,
    PostCommentsComponent,
    MypostComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    // MatToolbarModule
    MatToolbarModule,
    MatTabsModule,
    MatChipsModule
    
  ],

  exports:[
    FavouritePostComponent,
    MypostComponent
  ]

})
export class SettingsModule { }
