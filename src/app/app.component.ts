import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MessageComponent } from './shared/components/message/message.component';
import { CommonHttpService } from './shared/services/common-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked {

  @ViewChild(MessageComponent) messageComponent: MessageComponent;

  constructor(
    private http: CommonHttpService,
  ) { }

  ngOnInit(): void {
    console.log('ON INIT');
    this.http.get<any>('/users').subscribe();
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    // console.log(this.messageComponent)
  }

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT');
    // console.log(this.messageComponent)
  }

  ngAfterContentChecked(): void {
    console.log('AFTER CONTENT CHECKED');
    // console.log(this.messageComponent)
  }

}
