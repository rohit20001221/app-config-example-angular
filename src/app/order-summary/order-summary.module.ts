import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderSummaryComponent } from './order-summary.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [OrderSummaryComponent],
  exports: [OrderSummaryComponent],
})
export class OrderSummaryModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(OrderSummaryComponent);
  }
}
