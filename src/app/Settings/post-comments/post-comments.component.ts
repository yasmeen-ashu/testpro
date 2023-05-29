import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent {
  onDestroy$=new Subject
constructor(private settings:SettingsService){

}
ngOnInit(){

}
saveData(){

  // this.settings.postCommentsData().pipe(takeUntil(this.onDestroy$)).subscribe(res=>{

  // })
}
}
