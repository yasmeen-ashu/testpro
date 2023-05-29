import { Component, EventEmitter, Output } from '@angular/core';
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
this.getTagsData();
this.getTags();
  }
  tags
  getTagsData():void{
    this.tags=[]
    this.homeservice.getTags().pipe(takeUntil(this.onDestroy$)).subscribe(res=>{

      console.log(res);
   this.tags=res.body.tags
  
    })
  }
  @Output() selectedData=new EventEmitter()
  selcectchip(event){
console.log(event);
this.selectedData.emit(event)
this.getTags();

  }
  getTags(){
    this.homeservice.getTagsData(this.tags,this.limit,this.offset).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
      console.log(res);
      
    })
  }
}
