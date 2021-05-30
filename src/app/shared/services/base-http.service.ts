import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string, params?: { [key: string]: string } | HttpParams, opts?: BaseHttpOptions): Observable<T> {
    const context = opts ? opts.contextPath : null;
    const blob = opts ? opts.blob : false;
    const responseType = blob ? 'blob' as 'json' : 'json';
    return this.httpClient.get<T>(this._buildUrl(url, context), { params, responseType });
  }

  post<T>(url: string, body: any, params?: { [key: string]: string } | HttpParams, opts?: BaseHttpOptions): Observable<T> {
    const context = opts ? opts.contextPath : null;
    return this.httpClient.post<T>(this._buildUrl(url, context), body, { params });
  }

  put<T>(url: string, params?: { [key: string]: string } | HttpParams, opts?: BaseHttpOptions): Observable<T> {
    const context = opts ? opts.contextPath : null;
    return this.httpClient.get<T>(this._buildUrl(url, context), { params });
  }

  delete<T>(url: string, params?: { [key: string]: string } | HttpParams, opts?: BaseHttpOptions): Observable<T> {
    const context = opts ? opts.contextPath : null;
    return this.httpClient.delete<T>(this._buildUrl(url, context), { params });
  }

  /**
   *
   * @param url URL of Web Service.
   * @param contextPath API Web Context, if it is an empty string, `null` or `undefined`,
   * it will be use base app Web Context.
   *
   * @returns A string with the final API Web Context and URL.
   */
  private _buildUrl(url: string, contextPath?: string): string {
    const appContextApi = 'https://gorest.co.in/public-api';
    return `${contextPath || appContextApi}${url}`;
  }

}

export interface BaseHttpOptions {
  contextPath?: string;
  blob?: boolean;
}
