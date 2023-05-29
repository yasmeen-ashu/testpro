import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './Components/view/view.component';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { YourFeedComponent } from './Components/your-feed/your-feed.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { FavoriteButtonComponent } from '../Feature-Modules/feature/components/favorite-button/favorite-button.component';
import { TagsComponent } from '../tags/tags.component';
import { GlobalFeedComponent } from './Components/global-feed/global-feed.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { FavouriteButtonComponent } from './Components/favourite-button/favourite-button.component';



@NgModule({
  declarations: [
    ViewComponent,
   GlobalFeedComponent,
   YourFeedComponent,
    TagsComponent,
    FooterComponent,
    FavoriteButtonComponent,
    ProfileComponent,
    FavouriteButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule

  ],
  exports: [

  ViewComponent,FooterComponent,
  TagsComponent,
  FavoriteButtonComponent
  ]
})
export class SharedModule {

 }
