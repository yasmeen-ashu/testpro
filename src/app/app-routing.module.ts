import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './shared/Components/view/view.component';

const routes: Routes = [
  { path: "", redirectTo: "signin", pathMatch: "full" },
  {path:'view',component:ViewComponent},
  {path:"signin",loadChildren:()=>import("./Modules/authentication/authentication.module").then(m=>m.AuthenticationModule)},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
