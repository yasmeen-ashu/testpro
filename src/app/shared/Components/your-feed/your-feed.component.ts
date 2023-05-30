import { Component } from '@angular/core';
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
constructor(private feedservice:FeedServiceService){

}
ngOnInIt(){
this.yourFeed();
}
yourFeed(){
  this.feedservice.getYourFeedData(this.limit,this.offset).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
    console.log(res);
    
  })
}
}
