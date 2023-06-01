import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoursettingsComponent } from '../yoursettings/yoursettings.component';

const routes: Routes = [
  {path:'',component:YoursettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
