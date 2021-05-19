import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string, params?: { [key: string]: string } | HttpParams, opts?: CommonHttpOptions): Observable<T> {
    const context = opts ? opts.contextPath : null;
    return this.httpClient.get<T>(this._buildUrl(url, context), { params });
  }

  post<T>(url: string, body: any, params?: { [key: string]: string } | HttpParams, opts?: CommonHttpOptions): Observable<T> {
    const context = opts ? opts.contextPath : null;
    return this.httpClient.post<T>(url, body, { params });
  }

  put<T>(url: string, params?: { [key: string]: string } | HttpParams, opts?: CommonHttpOptions): Observable<T> {
    const context = opts ? opts.contextPath : null;
    return this.httpClient.get<T>(this._buildUrl(url, context), { params });
  }

  delete<T>(url: string, params?: { [key: string]: string } | HttpParams, opts?: CommonHttpOptions): Observable<T> {
    const context = opts ? opts.contextPath : null;
    return this.httpClient.delete<T>(this._buildUrl(url, context), { params });
  }

  private _buildUrl(url: string, contextPath?: string): string {
    const appContextApi = 'https://gorest.co.in/public-api';
    return `${contextPath || appContextApi}${url}`;
  }

}

export interface CommonHttpOptions {
  contextPath?: string;
}
