import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from "./Components/view/view.component";
import { ProfileComponent } from "./Components/profile/profile.component";

const routes: Routes = [
    {path:'',redirectTo:'view',pathMatch:'full'},
    {path:'view',component:ViewComponent},
    {path:'profile',component:ProfileComponent}
    
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SharedRoutingModule { }