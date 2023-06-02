import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/core/core/http/global.service';
import { evironment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FeedServiceService {

  constructor(private apiService:GlobalService) { }

  getGlobalFeed(limit:number,offset:number):Observable<HttpResponse<any>>{
    return this.apiService.getData(evironment.globalFeed+'?limit='+limit+'&offset='+offset)
  }
  // getpagination(limit:number,offset:number):Observable<HttpResponse<any>>{
  //   return this.apiService.getData(evironment.pagination+'?limit='+limit+'&offset='+offset)
  // }
  getYourFeedData(limit:number,offset:number):Observable<HttpResponse<any>>{
    return this.apiService.getData(evironment.yourFeed+'?limit='+limit+'&offset='+offset)
  }
favouriteButton(body):Observable<HttpResponse<any>>{
    return this.apiService.postData(evironment.favouritebutton,body)
  }

deleteFavourite():Observable<HttpResponse<any>>{
  return this.apiService.deleteData(evironment.favouritebutton)
} 

}
