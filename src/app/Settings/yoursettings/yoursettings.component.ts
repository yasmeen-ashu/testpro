import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Settings, UpdateSettings } from '../settings';
// import { Settings, UpdateSettings } from '../../Directives/modals/settings';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-yoursettings',
  templateUrl: './yoursettings.component.html',
  styleUrls: ['./yoursettings.component.scss']
})
export class YoursettingsComponent {
  settingsForm:FormGroup;
  onDestroy$=new Subject
  constructor(private settingService:SettingsService,private router:Router){
    this.settingsForm=new FormGroup({
      profile:new FormControl(''),
      userName:new FormControl(''),
      shortbio:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl('')

    })
  }
  ngOnInit(){
console.log('yourSetting');

  }
  saveSettingsData(){
let form=new Settings()
form.bio=this.settingsForm.get('shortbio').value;
form.email=this.settingsForm.get('email').value;
form.image=this.settingsForm.get('profile').value;
form.password=this.settingsForm.get('password').value;
form.username=this.settingsForm.get('userName').value;

let settings=new UpdateSettings()
settings.Update=form
this.settingService.updateSettings(JSON.stringify(form)).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
  console.log(res);
  
})
  }
  clickLogOut(){
    this.router.navigate(['/view'])
  }
}
