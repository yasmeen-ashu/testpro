import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from './core/core/services/jwt.service';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {
  constructor(private jwtservice:JwtService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser
    this.jwtservice.token$.subscribe(res=>{
      currentUser = res;
    })
    if (currentUser&&currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`,
        },
      });
    }
    return next.handle(request);
  }
 
  
}




