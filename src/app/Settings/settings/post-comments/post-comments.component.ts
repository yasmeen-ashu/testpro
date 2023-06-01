import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Comments, CommentUser } from 'src/app/shared/modals/favourite-button';
import { SettingsService } from '../../settings.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent {
  comments:FormGroup;
  onDestroy$=new Subject
constructor(private settings:SettingsService,private router:Router){
  this.comments=new FormGroup({
    comments:new FormControl('')
  })
}
ngOnInit(){

}
saveComments(){
  let form=new Comments()
  form.comments=this.comments.get('comments').value;
  let comment=new CommentUser();
  comment.user=form
  this.settings.postCommentsData(comment).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
console.log(res);

  })
  }
editArticle(){
this.router.navigate(['/newarticle'])
}
deleteArticle(){

}
}
