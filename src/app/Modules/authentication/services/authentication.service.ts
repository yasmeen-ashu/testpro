import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/core/core/http/global.service';
import { evironment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private apiService:GlobalService) { }
signinData(body):Observable<HttpResponse<any>>{
  return this.apiService.postData(evironment.signin,body)
}
signupData(body):Observable<HttpResponse<any>>{
  return this.apiService.postData(evironment.signup,body)
}
addNewArticle(body):Observable<HttpResponse<any>>{
  return this.apiService.postData(evironment.newArticle,body)
}
getArticleData():Observable<HttpResponse<any>>{
  return this.apiService.getData(evironment.getarticleData)
}
editArticle(slug:string,body):Observable<HttpResponse<any>>{
  return this.apiService.updateData(evironment.newArticle+'?slug='+slug,body)
  // return this.apiService.updateData(environment.newArticle+'?uid='+userId +'&msgType='+msgType,body);
}
}
