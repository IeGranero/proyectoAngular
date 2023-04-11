import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Producto } from '../interfaces/producto';
import { ServicesProductosService } from '../services/services-productos.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const body = event.body;
          this.changeDate(body);
        }
        return event;
      })
    );
  }

  changeDate(request: Producto[]): Producto[] | undefined {
    return request.map((request) => {
      request.reviews?.forEach((secondSeek) => {
        secondSeek.date = new Date(secondSeek.date);
      });

      return request;
    });
  }
}
