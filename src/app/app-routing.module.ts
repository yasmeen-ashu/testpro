import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './shared/Components/view/view.component';

const routes: Routes = [
  { path: "", redirectTo: "signin", pathMatch: "full" },
  {path:'view',component:ViewComponent},
  {path:"signin",loadChildren:()=>import("./Modules/authentication/authentication.module").then(m=>m.AuthenticationModule)},
<<<<<<< HEAD
  {path:"settings",loadChildren:()=>import("./Settings/settings/settings.module").then(m=>m.SettingsModule)},
=======
  {path:"yoursettings",loadChildren:()=>import("./Settings/settings/settings.module").then(m=>m.SettingsModule)},
  {path:'profile',loadChildren:()=>import("./shared/shared.module").then(m=>m.SharedModule)}
>>>>>>> ff8e64f04748000f2737d195eb5a3aeb9e5db068
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
