import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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
  page:number=0;
  pageSize:number=10;
  displayedRows:number=0;
  rowsCount:number;
  globalData: any[]=[];
  totalFeeds:number;
  pageSizes=[10,25,50,100];
  noOfPages=0;
 
constructor(private feedServices:FeedServiceService,private router:Router,private homeservice:HomeService){
  
}
ngOnInit(){
  

this.getData()
}

getData(){
  // console.log(this.limit);
  let author
  this.feedServices.getGlobalFeed(this.pageSize,this.page).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
    console.log(res);
    this.globalData=res.body.articles;
    this.totalFeeds=res.body.articlesCount;
    console.log(this.globalData,res.body);
    this.displayedRows = this.page * this.pageSize;
    this.noOfPages=(this.totalFeeds/this.pageSize)
    if (this.displayedRows > this.totalFeeds) {
      this.displayedRows = this.totalFeeds;
    } 

  })
}
handleClick(){
  
}

addLikes(){

}
navigateProfile(item: any){
  console.log(item);
  let extras: NavigationExtras = {
    queryParams: {item: JSON.stringify(item)},
    skipLocationChange: true
  }
  this.router.navigate(['/profile/profile'],  extras);
}
navigatefirst(){
  this.page = 1;
  this.displayedRows = (this.page * this.pageSize)
 this. getData()

}
navigateBefore(){
  this.page--;
  this.getData();
}
navigateNext(){
  this.page++;
  this.getData();
}
navigateLast(){
  let lastpagecount
  lastpagecount = (this.totalFeeds / this.pageSize);
  if (!Number.isInteger(lastpagecount)) {
    this.page = ~~(++lastpagecount);
  }
  else {
    this.page = lastpagecount
  }
  this.displayedRows = this.totalFeeds;
this.getData();
}


pageSelectionChange(event){
  let findPage = ((this.displayedRows+1) / event.value);
    if (!Number.isInteger(findPage)) {
      this.page = ~~(++findPage);
    }
    else{
      this.page=findPage;
    }
    this.getData();
    if (this.totalFeeds >= event.value) {
      this.displayedRows = event.value;
    }
    else {
      this.displayedRows = this.totalFeeds;
    }
  }

}















