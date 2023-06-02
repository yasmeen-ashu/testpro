import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Comments, CommentUser } from 'src/app/shared/modals/favourite-button';
import { SettingsService } from '../../settings.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent {
  commentsForm:FormGroup;
  onDestroy$=new Subject
  articleData: any;
constructor(private settingservice:SettingsService,
  private router:Router,){
  this.commentsForm=new FormGroup({
    comments:new FormControl('')
  })
}

ngOnInit(){
  this.articleData=JSON.parse(localStorage.getItem('newArticleData'))
  console.log(this.articleData);
  
}
commentSave=[]
saveComments(){
  let form=new Comments()
  let comment=new CommentUser();
  form.body=this.commentsForm.get('comments')?.value;
  comment.comment=form
  this.settingservice.postCommentsData(this.articleData.slug,comment).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
    console.log(res);
    this.getCommentsData();
    
    
  })
  
  }
  getCommentsData(){
    this.settingservice.getComments(this.articleData.slug).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
      console.log(res);
      this.commentSave=res.body.comment
    })
  }
editArticle(){
this.router.navigate(['/newarticle'])
}
deleteArticle(){

}
id:number
deleteComments(item){
this.settingservice.deleteComments(this.articleData.slug,item.id).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
  console.log(res);
  
})
}
}