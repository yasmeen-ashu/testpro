import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { evironment } from 'src/environments/environment';
import { GlobalService } from '../core/core/http/global.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private apiService:GlobalService) { }
  
  // postCommentsData(body):Observable<HttpResponse<any>>{
  //   return this.apiService.postData(evironment.comments,body)
  // }

  postCommentsData(slug,comments):Observable<HttpResponse<any>>{
    let body=JSON.stringify(comments)
    return this.apiService.postData(evironment.comments+"/"+slug+"/comments",body)
  }

  updateSettings(body):Observable<HttpResponse<any>>{
    return this.apiService.updateData(evironment.settings,body)
  }
getMyPostData(author:string,limit:number,offset:number):Observable<HttpResponse<any>>{
  return this.apiService.getData(evironment.mypost+'?author='+author+'&limit='+limit+'&offset='+offset)
}
deleteComments(slug:string,id):Observable<HttpResponse<any>>{
  return this.apiService.deleteData(evironment.comments+"/"+slug+"/comments"+"/"+id)
}

getComments(slug:number):Observable<HttpResponse<any>>{
return this.apiService.getData(evironment.comments+"/"+slug+"/comments")
}
// getFavouritePost():Observable<HttpResponse<any>>{
//   return this.apiService.getData(evironment.favouritePost+'&favorited='+)
// }  
}
