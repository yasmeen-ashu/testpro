import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { Router, UrlSerializer } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import {  Signup, User } from '../../modals/signup';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hide=true;
  signupForm: FormGroup;
  onDestroy$=new Subject
  email
  constructor(private router:Router,private authenticationservice:AuthenticationService){
this.signupForm=new FormGroup({
  username:new FormControl('',[Validators.required]),
  email:new FormControl('', [Validators.required, Validators.email]),
  password:new FormControl('')
})
  }
  errorMessage:any
  ngOnInit(){

  }
  // getErrorMessage(){
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  openHome(){
this.router.navigate(['/view'])
  }
  openSignin(){
this.router.navigate(['/signin'])
  }
  openSignup(){
this.router.navigate(['/signup'])
  }
  saveSignup(){
    let form=new Signup()
    form.email=this.signupForm.get('email')?.value;
    form.password=this.signupForm.get('password')?.value;
    form.username=this.signupForm.get('username')?.value;
    let user=new User();
    user.user=form
    this.authenticationservice.signupData(JSON.stringify(user)).subscribe({
      next: (res) => {
        console.log(res)
        if(res.status==200){
          this.router.navigate(['/signin']);
        }
      },
      error: (err) => {
        console.log(err)
        this.errorMessage=err.error.errors;
        console.log(this.errorMessage)
    
      }
    });
  }
}
