import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderDescriptionComponent } from './order-description.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [BrowserModule],
  declarations: [OrderDescriptionComponent],
  exports: [OrderDescriptionComponent],
})
export class OrderDescriptionModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const element = createCustomElement(OrderDescriptionComponent, {
      injector: this.injector,
    });

    customElements.define('x-order-description', element);
  }
}
