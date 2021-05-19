import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService } from '../shared/services/logger.service';
import { ErrorService } from '../shared/services/error.service';

@Injectable()
export class CommonHttpInterceptor implements HttpInterceptor {

    constructor(
        private loggerService: LoggerService,
        private errorService: ErrorService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const baseLog = `CommonHttpInterceptor >> intercept >> ${req.method} >> ${req.urlWithParams} >>`;
        this.loggerService.log(`${baseLog} body >>`, req.body);
        return next.handle(this._cloneHttpRequest(req)).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.loggerService.log(`${baseLog} SUCCESS >> response >>`, event);
            }
        }, error => {
            if (error instanceof HttpErrorResponse) {
                this.loggerService.log(`${baseLog} HTTP ERROR >> response >> `, error);
            }
        }));
    }

    private _cloneHttpRequest(req: HttpRequest<any>): HttpRequest<any> {
        return req.clone({});
    }
}

