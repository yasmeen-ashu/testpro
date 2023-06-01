import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { Subject } from 'rxjs';
import { JwtService } from 'src/app/core/core/services/jwt.service';
import { Signin,  Users } from '../../modals/signin';
// import { users } from '../../modals/signup';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signinForm:FormGroup;
  hide=true;
  onDestroy$=new Subject;
  hideStatus:boolean=false;
constructor(private router:Router,private authenticationservice:AuthenticationService,private jwtservice:JwtService){
this.signinForm=new FormGroup({
  email : new FormControl('', [Validators.required, Validators.email]),
  password:new FormControl('')
})
}
ngOnInit(){

}

openHome(){
this.router.navigate(['/view'])
}
openSignin(){
this.router.navigate(['/signin'])
}
openSignup(){
this.router.navigate(['/signup'])
}
errorStatus:any
saveSignin(){
  let form=new Signin()
  form.email=this.signinForm.get('email').value;
  form.password=this.signinForm.get('password')?.value;
  let user=new Users();
  user.user=form
  this.authenticationservice.signinData(JSON.stringify(user)).subscribe({
    next: (res) => {
      console.log(res)
      this.jwtservice.storeToken({token:res.body.user.token})
      if(res.status==200){
          localStorage.setItem("currentUser", JSON.stringify(true));
          this.router.navigate(['/view']);
        }
    },
    error: (err) => {
      console.log(err)
      this.errorStatus=err.error.errors;
      console.log(this.errorStatus)
  
    }
  })
}
}

