import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonHttpService } from './shared/services/common-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked {

  constructor(
    private http: CommonHttpService,
  ) { }

  ngOnInit(): void {
    console.log('ON INIT');
    this.http.get<any>('/users').subscribe();
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
  }

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT');
  }

  ngAfterContentChecked(): void {
    console.log('AFTER CONTENT CHECKED');
  }

}
