import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Article, ArticleData } from '../../modals/article';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent {
articleForm:FormGroup;
onDestroy$=new Subject
constructor(private router:Router,private authenticationservice:AuthenticationService){
this.articleForm=new FormGroup({
  articleTitle:new FormControl(''),
  articleAbout:new FormControl(''),
  markdown:new FormControl(''),
  tags:new FormControl(''),
})
}
ngOnInit(){

}
saveArticleData(){
let form=new Article()
let taglist=[]
form.title=this.articleForm.get('articleTitle').value;
form.description=this.articleForm.get('articleAbout').value;
form.body=this.articleForm.get('markdown').value;
taglist.push(form.tagList=this.articleForm.get('tags').value)
form.tagList=taglist

let article=new ArticleData()
article.article=form

this.authenticationservice.addNewArticle(article).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
  console.log(res);
  
})
}
openHome(){
this.router.navigate(['/view'])
}
openArticle(){

}
openSettings(){
this.router.navigate(['/settings'])
}
}
