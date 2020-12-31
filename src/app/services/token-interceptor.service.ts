import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.authService.getToken();
    let req;
    if(token){
     req = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
     })
    } else {
      req =request;
    }

    return next.handle(req);
  }


}
