import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './shared/Components/view/view.component';

const routes: Routes = [
//   {path:'',redirectTo:'/shared/view',pathMatch:'full'},
//   {path:"shared",
//   loadChildren:()=>import("./shared/shared.module").then(m=>m.SharedModule)
//  },
  
  
  {path:'',component:ViewComponent},
  { path: "", redirectTo: "authentication/sign-in", pathMatch: "full" },
  {path:"",loadChildren:()=>import("./Modules/authentication/authentication.module").then(m=>m.AuthenticationModule)},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
