import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, UrlSerializer } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Signin, userData } from '../../modals/signin';
import { users } from '../../modals/signup';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signinForm:FormGroup;
  email
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
// getErrorMessage(){
//   if (this.email.hasError('required')) {
//     return 'You must enter a value';
//   }

//   return this.email.hasError('email') ? 'Not a valid email' : '';
// }
openHome(){
this.router.navigate(['/View'])
}
openSignin(){
this.router.navigate(['/signin'])
}
openSignup(){
this.router.navigate(['/signup'])
}
saveSignin(){
  let form=new Signin()
  form.email=this.signinForm.get('email')?.value;
  form.password=this.signinForm.get('password')?.value;

  let user=new userData();
  user.users=form

  // user.user=logInObj;
  this.authenticationservice.signinData(JSON.stringify(user)).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
console.log(res);

  })
  this.router.navigate(['/view'])
}
}

