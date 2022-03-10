import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {catchError,delay,retry} from "rxjs/operators";


@Injectable()
export class ApiinterceptorInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(delay(2000),
      retry(3),
      catchError((error) => {
        if(error instanceof HttpErrorResponse){
          window.alert(error.message) ;
        }
        return throwError(error.message);   
      })
    )
    }
}

