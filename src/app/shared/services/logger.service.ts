import { Injectable } from '@angular/core';
import { LOG } from '../constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(...data: any[]): void {
    this._print('log', data);
  }

  info(...data: any[]): void {
    this._print('info', data);
  }

  warn(...data: any[]): void {
    this._print('warn', data);
  }

  error(...data: any[]): void {
    this._print('error', data);
  }

  private _print(type: LogType = 'log', data: any[] = []): void {
    if (LOG) { data.forEach(x => console[type](x)); }
  }

}

type LogType = 'log' | 'info' | 'warn' | 'error';
