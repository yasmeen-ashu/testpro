import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
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
constructor(private feedServices:FeedServiceService,private router:Router){

}
ngOnInit(){
this.globalFeedData();
}
globalData=[]
globalFeedData(){
  this.feedServices.getGlobalFeed(this.limit,this.offset).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
    console.log(res);
    this.globalData=res.body.articles

    
  })
}
navigateProfile(){
  this.router.navigate(['/profile'])
}

}


