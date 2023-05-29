import { Injectable } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { GlobalService } from './core/core/http/global.service';
// import{environment} from '@env/environment'
import { HttpResponse } from '@angular/common/http';
import { evironment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private apiService:GlobalService) { }


  getTags():Observable<HttpResponse<any>>{
    return this.apiService.getData(evironment.tags)
  }

  getTagsData(tags:string,limit:number,offset:number):Observable<HttpResponse<any>>{
    return this.apiService.getData(evironment.selectedTags+'?tag='+tags+'&limit='+limit+"&offset="+offset)
    // (environment.patientVaccination+"?patientId="+patientId+"&physicianId="+physicianId+"&locationId="+locationId)
  }

  
}
