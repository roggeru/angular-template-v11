import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private loggerService: LoggerService) { }

  /**
   * @description
   * Catch, log and manage errors. `HttpErrorResponse` is logged by CommonHttpInterceptor class.
   *
   * @see {CommonHttpInterceptor}
   *
   * @param error Error will be catched.
   */
  catchError(error: any): void {
    if (error instanceof HttpErrorResponse) {

    } else {
      this.loggerService.log('ErrorService >> catchError >> ', error);
    }
  }
}
