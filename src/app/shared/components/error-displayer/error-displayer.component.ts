import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, NgModel, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-displayer',
  templateUrl: './error-displayer.component.html',
  styleUrls: ['./error-displayer.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorDisplayerComponent implements OnInit, OnChanges {

  // @Input() control?: FormControl | NgModel;
  @Input() private errors?: ValidationErrors;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.errors);
  }

  // get errors(): string[] {
  //   console.log('READ GET FUNCTION');
  //   return this.control ? Object.keys(this.control.errors) : [];
  // }

  get errorsList(): string[] {
    return this.errors ? Object.keys(this.errors) : [];
  }

}
