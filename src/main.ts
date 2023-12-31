import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ElementsModule } from './app/elements.module';

if (environment.production) {
  enableProdMode();
}

const platform = platformBrowserDynamic([]);

platform.bootstrapModule(AppModule).catch((err) => console.error(err));

platform.bootstrapModule(ElementsModule);
