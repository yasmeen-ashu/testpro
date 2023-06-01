import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MyInterceptor } from './my-interceptor.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
// import { SettingsComponent } from './Settings/settings/settings.component';
import { SettingsModule } from './Settings/settings/settings.module';
import { PostCommentsComponent } from './Settings/settings/post-comments/post-comments.component';
import { YoursettingsComponent } from './Settings/yoursettings/yoursettings.component';
import { ProfileComponent } from './shared/Components/profile/profile.component';
import { CommentsComponent } from './Modules/comments/comments.component';
// import { SharedModule } from "./shared/shared.module";
import { FooterComponent } from './shared/Components/footer/footer.component';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
@NgModule({
    declarations: [
        AppComponent,
        NewArticleComponent,
        // PostCommentsComponent,
        YoursettingsComponent,
        FooterComponent
        // CommentsComponent,
        // ProfileComponent
        // SignInComponent
        // TagsComponent,
        // FavoriteButtonComponent,
    ],
    exports: [
        // SharedModule,
        // SettingsModule,
        AuthenticationModule,
        // this.username
    ],
    providers: [ { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorInterceptor, multi: true },],
    // providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: MyInterceptorInterceptor,
    //   multi: true
    // }
    // ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        // SharedModule,
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
       
    ]
})
export class AppModule { }
