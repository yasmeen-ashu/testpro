import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './shared/Components/view/view.component';
import {MatChipsModule} from '@angular/material/chips';
import { TagsComponent } from './tags/tags.component';
import { FavoriteButtonComponent } from './Feature-Modules/feature/components/favorite-button/favorite-button.component';
import { SignInComponent } from './Modules/authentication/Components/sign-in/sign-in.component';
import { MatIconModule } from '@angular/material/icon';
import { AuthenticationModule } from './Modules/authentication/authentication.module';
import { NewArticleComponent } from './Modules/authentication/Components/new-article/new-article.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SettingsComponent } from './Settings/settings/settings.component';
import { SettingsModule } from './Settings/settings/settings.module';
import { PostCommentsComponent } from './Settings/post-comments/post-comments.component';
@NgModule({
  declarations: [
    AppComponent,
    NewArticleComponent,
    SettingsComponent,
    PostCommentsComponent
    // SignInComponent
    // TagsComponent,
    // FavoriteButtonComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports:[
    SharedModule,
    // SettingsModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
