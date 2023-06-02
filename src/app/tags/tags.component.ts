import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HomeService } from '../home.service';
import { AuthenticationService } from '../Modules/authentication/services/authentication.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  onDestroy$=new Subject();
  limit:number=10;
  offset:number=0
  constructor(private homeservice:HomeService,private authenticationservice:AuthenticationService){

  }
  ngOnInit(){
this.getTags();
  }
  
  @Input() selectedTags:string
  @Output() selectedData=new EventEmitter()
  popularTags
  getTags(){
    // this.popularTags=[]
    this.homeservice.getTagsData(this.selectedTags,this.limit,this.offset).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
      console.log(res); 
     this.popularTags=res.body.articles
    })
 
 }
 navigateProfile(){

 }

 selectedIndex
 ngOnChanges(changes:SimpleChanges){
  if(this.selectedIndex==2){


  if(changes['selectedTags'].currentValue){
    console.log(this.selectedTags);
  }
 }
}
}
