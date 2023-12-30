import { APP_INITIALIZER, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createAppConfigFactory } from './app-config';
import { ElementsModule } from './elements.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ElementsModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: createAppConfigFactory({
        app_name: 'universal_search',
        env: 'local',
      }),
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
