import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FeedServiceService } from '../../services/feed-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
onDestroy$=new Subject;
// limit:number=10;
// offset:number=0;
currentPage;
totalPages
  countsArray: any[];
  constructor(private feedService:FeedServiceService){

  }
  ngOnInit(){

  }
  
}
