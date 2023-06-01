import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SettingsService } from '../../settings.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.scss']
})
export class MypostComponent implements OnInit,OnDestroy {
  onDestroy$=new Subject;
  limit:number=10;
  offset:number=0;
  author:string;
  postData:any[]=[];
constructor(private services:SettingsService){

}
ngOnInit(){
this.myPostData();
}
addLikes(){

}
myPostData(){
  this.services.getMyPostData(this.author,this.limit,this.offset).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
    console.log(res);
    this.postData=res.body.article;
    
  })
}
ngOnDestroy(): void {
  this.onDestroy$.next(false);
}
}
