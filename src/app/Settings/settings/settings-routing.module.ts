import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoursettingsComponent } from '../yoursettings/yoursettings.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';

const routes: Routes = [
  {path:'',component:YoursettingsComponent},
  {path:"postcomments",component:PostCommentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
