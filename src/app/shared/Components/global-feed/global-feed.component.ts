import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { HomeService } from 'src/app/home.service';
import { FeedServiceService } from '../../services/feed-service.service';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent {
  onDestroy$=new Subject
  limit:number=10;
  offset:number=0;
  page:number=1;
  pageSize:number=25;
  displayedRows=0;
  rowsCount:number;
  pageSizes=[];
 
constructor(private feedServices:FeedServiceService,private router:Router,private homeservice:HomeService){
  this.pageSizes=[25,50,75,100]
}
ngOnInit(){
this.globalFeedData();
// this.getData(1)
}
globalData=[]
globalFeedData(){
  this.feedServices.getGlobalFeed(this.limit,this.offset).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
    console.log(res);
    this.globalData=res.body.articles

    
  })
}
totalFeeds
noOfPages
getData(){
  
  this.feedServices.getpagination(this.limit,this.offset).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
   console.log(res);
  this.totalFeeds=res.body.articlesCount;
  this.noOfPages=(this.totalFeeds/this.pageSize) 

  })
  
}
navigateLast(){
  let lastpagecount
  lastpagecount  = (this.rowsCount/this.pageSize);
 if(!Number.isInteger(lastpagecount)){
  this.page = ~~(++lastpagecount);
}
else{
  this.page = lastpagecount;
}
  this.displayedRows=this.rowsCount
  this.getData()
}
navigateNext(){
  this.page++;

  this.getData()
}
navigateBefore(){
  this.page--;  
  this.getData() 
}
navigatefirst(){
  this.page=1;
  this.displayedRows =(this.page *this.pageSize) 
  this.getData()
}
onSelectionChange(event){

}
navigateProfile(){
  this.router.navigate(['/profile'])
}




}

















