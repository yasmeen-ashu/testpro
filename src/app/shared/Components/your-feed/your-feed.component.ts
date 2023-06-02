import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FeedServiceService } from '../../services/feed-service.service';

@Component({
  selector: 'app-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.scss']
})
export class YourFeedComponent {
  limit:number=10;
  offset:number=0;
  onDestroy$=new Subject
  page:number=0;
  pageSize:number=10;
  displayedRows:number=0;
  rowsCount:number;
  globalData: any[]=[];
  totalFeeds:number;
  pageSizes=[10,25,50,100];
  noOfPages=0;
constructor(private feedservice:FeedServiceService,private router:Router){

}
ngOnInIt(){
this.yourFeed();
}
yourFeed(){
  this.feedservice.getYourFeedData(this.pageSize,this.page).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
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
pageSelectionChange(event){
  let findPage = ((this.displayedRows+1) / event.value);
    if (!Number.isInteger(findPage)) {
      this.page = ~~(++findPage);
    }
    else{
      this.page=findPage;
    }
    this.yourFeed();
    if (this.totalFeeds >= event.value) {
      this.displayedRows = event.value;
    }
    else {
      this.displayedRows = this.totalFeeds;
    }
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
   this. yourFeed()
  
  }
  navigateBefore(){
    this.page--;
    this.yourFeed();
  }
  navigateNext(){
    this.page++;
    this.yourFeed();
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
  this.yourFeed();
  }
  
}
