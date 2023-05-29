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
}
