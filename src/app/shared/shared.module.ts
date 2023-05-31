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
import { TagsComponent } from '../tags/tags.component';
import { GlobalFeedComponent } from './Components/global-feed/global-feed.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { FavouritePostComponent } from '../Settings/settings/favourite-Post/favourite-post.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { ViewTagsComponent } from './Components/view-tags/view-tags.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    ViewComponent,
    GlobalFeedComponent,
    YourFeedComponent,
    TagsComponent,
    FooterComponent,
    FavouritePostComponent,
    ProfileComponent,
    
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule

  ],
  exports: [

  ViewComponent,FooterComponent,
  TagsComponent,
  FavouritePostComponent
  ]
})
export class SharedModule {

 }
