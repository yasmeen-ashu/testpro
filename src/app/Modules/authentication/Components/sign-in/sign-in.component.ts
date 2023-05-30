import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, UrlSerializer } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
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
  onDestroy$=new Subject
constructor(private router:Router,private authenticationservice:AuthenticationService){
this.signinForm=new FormGroup({
  email : new FormControl('', [Validators.required, Validators.email]),
  password:new FormControl('')
})
}
ngOnInit(){
  // alert('comes to this block')
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
  this.authenticationservice.signupData(JSON.stringify(user)).subscribe({
    next: (res) => {
      console.log(res)
      if(res.status==200){
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

