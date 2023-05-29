import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
// import { SignInComponent } from './sign-in/sign-in.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NewArticleComponent } from './Components/new-article/new-article.component';


@NgModule({
  declarations: [
  
    SignInComponent,
       SignUpComponent,
      //  NewArticleComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatIconModule,
    // MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    // SignInComponent,
    // SignUpComponent,
  ]

})
export class AuthenticationModule { }
