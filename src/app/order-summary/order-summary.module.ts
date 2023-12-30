import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderSummaryComponent } from './order-summary.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [BrowserModule],
  declarations: [OrderSummaryComponent],
  exports: [OrderSummaryComponent],
})
export class OrderSummaryModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const element = createCustomElement(OrderSummaryComponent, {
      injector: this.injector,
    });

    customElements.define('x-order-summary', element);
  }
}
