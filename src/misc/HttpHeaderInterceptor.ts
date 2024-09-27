import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
  
  @Injectable()
  export class HttpHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // Clone the request to add the new header
      const clonedRequest = req.clone({ headers: req.headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjAsInVzZXJfZW1haWwiOiJnb2VsYWthbnNoYTAwNkBnbWFpbC5jb20iLCJleHBpcmVzIjoxNzI3MjgwNDA1Ljc5Njg0NTd9.VQ9sG5VnA8FEJNN27dgHTRyZERayrgjkEoHnlqqdQK8') });
  
      // Pass the cloned request instead of the original request to the next handle
      return next.handle(clonedRequest);
    }
  }

  