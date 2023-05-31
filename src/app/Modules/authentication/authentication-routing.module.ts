import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArticleComponent } from './Components/new-article/new-article.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:"newarticle",component:NewArticleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
