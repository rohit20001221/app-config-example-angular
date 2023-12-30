import { inject } from '@angular/core';
import { AppConfigManifestService } from './app-config.service';
import { CreateAppConfigFactoryArgs } from './types';

export const createAppConfigFactory = (args: CreateAppConfigFactoryArgs) => {
  return () => {
    const appConfig = inject(AppConfigManifestService);

    return () =>
      new Promise((resolve, reject) => {
        appConfig.init(args).then(() => resolve(true));
      });
  };
};
