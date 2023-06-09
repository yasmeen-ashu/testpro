import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './shared/Components/view/view.component';

const routes: Routes = [
  { path: "", redirectTo: "view", pathMatch: "full" },
  {path:'view',component:ViewComponent},
  {path:"signin",loadChildren:()=>import("./Modules/authentication/authentication.module").then(m=>m.AuthenticationModule)},
  {path:"yoursettings",loadChildren:()=>import("./Settings/settings/settings.module").then(m=>m.SettingsModule)},
  // {path:'profile',loadChildren:()=>import("./shared/shared.module").then(m=>m.SharedModule)}
  {path:'profile',loadChildren:()=>import('./shared/shared.module').then(m=>m.SharedModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
