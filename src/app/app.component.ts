import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil  } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SampleProject';
  onDestroy$=new Subject()
  data: string;
  hideStatus:boolean=false;
  constructor(private homeservice:HomeService,private router:Router){

  }
  ngOnInit(){
    this.hideStatus = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.hideStatus);
    
this.getTagsData();
  }
  tags
  getTagsData():void{
    this.tags=[]
    this.homeservice.getTags().pipe(takeUntil(this.onDestroy$)).subscribe(res=>{

      console.log(res);
   this.tags=res.body.tags
  
    })
  }
  openHome(){
this.router.navigate(['/view'])
  }
  // openSignin(){
// this.router.navigate(['/signin'])
openSignin(){
  this.router.navigate(['/signin'])
}
  

  openSignup(){
this.router.navigate(['/signup'])
  }

  openView(){
      this.router.navigate(['/view'])
  }
  openNewArticle(){
this.router.navigate(['/newarticle'])
  }
  openSetings(){
this.router.navigate(['/yoursettings'])
  }
  openProfile(){
    console.log('.AAAa');
    
    debugger
    // this.router.navigate(['/shared/profile'])
    this.router.navigate(['profile', 'profile'])

  }
}
