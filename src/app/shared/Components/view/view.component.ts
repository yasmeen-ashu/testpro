import { Component } from '@angular/core';
import { MatChipOption } from '@angular/material/chips';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  selectedTags:string=""
  onDestroy$=new Subject
constructor(private router:Router, private homeservice:HomeService){

}
ngOnInit(){
this.getTagsData()
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

selectionData(event){
  console.log(event);
this.selectedTags=event


  }
  navigateProfile(){

  }


  tags
  getTagsData():void{
    this.tags=[]
    this.homeservice.getTags().pipe(takeUntil(this.onDestroy$)).subscribe(res=>{

      console.log(res);
   this.tags=res.body.tags
  
    })
  }
  selectedValue
  selcectchip(item){
    this.selectedTags=item
     console.log(item);
 
    
      }
}
