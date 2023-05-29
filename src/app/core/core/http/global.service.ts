import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient, HttpResponse,HttpHeaders}from '@angular/common/http';
import { evironment } from 'src/environments/environment';
const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient ) { }
  public getData(route: string): Observable<HttpResponse<any>> {
    return this.http.get(
         this.createCompleteRoute(route),
         { observe: 'response', headers: httpHeaders});
  }
  private createCompleteRoute(route: string) {
    return `${evironment.baseUrl}/${route}`;
  }

  public postData(route: string,body): Observable<HttpResponse<any>> {
    return this.http.post(
         this.createCompleteRoute(route),body,
         { observe: 'response', headers: httpHeaders});
  }
 
public deleteData(route:string):Observable<HttpResponse<any>>{
  return this.http.delete(this.createCompleteRoute(route),{observe:'response',headers:httpHeaders})
}
public updateData(route:string,body):Observable<HttpResponse<any>>{
  return this.http.put(this.createCompleteRoute(route),body,{observe:'response',headers:httpHeaders});
}
}
