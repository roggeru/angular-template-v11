import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorDisplayerComponent } from './shared/components/error-displayer/error-displayer.component';
import { BaseHttpService } from './shared/services/base-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked {

  @ViewChild(ErrorDisplayerComponent) errorDisplayer: ErrorDisplayerComponent;

  control = new FormControl('', [Validators.email]);
  text = '';

  constructor(
    private http: BaseHttpService,
  ) { }

  ngOnInit(): void {
    console.log('ON INIT');
    this.http.get<any>('/users').subscribe();
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.errorDisplayer);
  }

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT');
  }

  ngAfterContentChecked(): void {
    console.log('AFTER CONTENT CHECKED');
  }

}
