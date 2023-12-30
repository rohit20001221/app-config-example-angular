import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderDescriptionComponent } from './order-description.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [OrderDescriptionComponent],
  exports: [OrderDescriptionComponent],
})
export class OrderDescriptionModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(OrderDescriptionComponent);
  }
}
