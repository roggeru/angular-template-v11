import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService } from '../shared/services/logger.service';

@Injectable()
export class CommonHttpInterceptor implements HttpInterceptor {

    constructor(private loggerService: LoggerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loggerService.log(`CommonHttpInterceptor >> intercept >> url ${req.urlWithParams}`);
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            this.loggerService.log(event);
            if (event instanceof HttpResponse) {
                this.loggerService.log(`CommonHttpInterceptor >> intercept >> url ${req.urlWithParams} >> SUCCESS >> response >>`, event);
            }
        }, error => {
            if (error instanceof HttpErrorResponse) {
                this.loggerService.log(`CommonHttpInterceptor >> intercept >> url ${req.urlWithParams} >> ERROR >> response >> `, error);
            }
        }));
    }
}

