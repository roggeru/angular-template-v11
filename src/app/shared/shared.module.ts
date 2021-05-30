import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDisplayerComponent } from './components/error-displayer/error-displayer.component';



@NgModule({
  declarations: [ErrorDisplayerComponent],
  imports: [CommonModule],
  exports: [ErrorDisplayerComponent]
})
export class SharedModule { }
