import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { MessageContainerComponent } from './components/message-container/message-container.component';
import { AdDirective } from './directives/ad.directive';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';



@NgModule({
  declarations: [MessageComponent, MessageContainerComponent, AdDirective, AdBannerComponent],
  imports: [CommonModule],
  exports: [MessageComponent, MessageContainerComponent, AdBannerComponent]
})
export class SharedModule { }
