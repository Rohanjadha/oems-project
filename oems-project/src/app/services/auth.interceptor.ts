import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './loginService/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let authReq = request;

    let token = this.loginService.getToken()

    if(token!=null){
      authReq =authReq.clone({
        
        setHeaders:{authorization:`Bearer ${token}`}
      })
    }


    return next.handle(authReq);
  }
}
