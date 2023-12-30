import { CommonModule } from '@angular/common';
import {
  ApplicationRef,
  DoBootstrap,
  NgModule,
  PlatformRef,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderDescriptionModule } from './order-description/order-description.module';
import { OrderSummaryModule } from './order-summary/order-summary.module';

@NgModule({
  imports: [BrowserModule],
})
export class ElementsModule implements DoBootstrap {
  constructor(private platform: PlatformRef) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    this.platform.bootstrapModule(OrderDescriptionModule);
    this.platform.bootstrapModule(OrderSummaryModule);
  }
}
