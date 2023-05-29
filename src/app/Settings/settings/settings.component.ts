import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Modules/authentication/services/authentication.service';
import { Settings, UpdateSettings } from '../settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
settingForm :FormGroup;
hide=true;
constructor(private router:Router,private authenticationservice:AuthenticationService){
this.settingForm=new FormGroup({
  profile:new FormControl(''),
  shortbio:new FormControl(''),
  username:new FormControl(''),
  email : new FormControl('', [Validators.required, Validators.email]),
  // email:new FormControl('',[Validators.required,Validators.email]),
  newPassword:new FormControl('')
})
}
ngOnInit(){

}
updateSettings(){
let form=new Settings()
form.email=this.settingForm.get('email').value,
form.username=this.settingForm.get('username').value;
form.profile=this.settingForm.get('profile').value;
form.shortbio=this.settingForm.get('shortbio').value;
form.password=this.settingForm.get('newpassword').value;
let user= new UpdateSettings();
user.Update=form;


}
logOut(){
  this.router.navigate(['/view'])
}
}
