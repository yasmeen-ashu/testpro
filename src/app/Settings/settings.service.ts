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
  
  postCommentsData(body):Observable<HttpResponse<any>>{
    return this.apiService.postData(evironment.comments,body)
  }
  updateSettings(body):Observable<HttpResponse<any>>{
    return this.apiService.updateData(evironment.settings,body)
  }
getMyPostData(author:string,limit:number,offset:number):Observable<HttpResponse<any>>{
  return this.apiService.getData(evironment.mypost+'?author='+author+'&limit='+limit+'&offset='+offset)
}
// getFavouritePost():Observable<HttpResponse<any>>{
//   return this.apiService.getData(evironment.favouritePost+'&favorited='+)
// }  
}
