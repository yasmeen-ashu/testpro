import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
  private token = new BehaviorSubject<any>(null);
  token$ = this.token.asObservable();

  storeToken(event:any){
    console.log(event);
    this.token.next(event);
  }

}

