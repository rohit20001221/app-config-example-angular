import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { OrderDescriptionModule } from './app/order-description/order-description.module';
import { OrderSummaryModule } from './app/order-summary/order-summary.module';

if (environment.production) {
  enableProdMode();
}

const platform = platformBrowserDynamic([]);

platform.bootstrapModule(AppModule).catch((err) => console.error(err));
platform
  .bootstrapModule(OrderDescriptionModule)
  .catch((err) => console.error(err));
platform.bootstrapModule(OrderSummaryModule).catch((err) => console.error(err));
