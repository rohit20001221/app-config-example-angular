import { Injectable } from '@angular/core';
import { CreateAppConfigFactoryArgs } from './types';

@Injectable({
  providedIn: 'any',
})
export class AppConfigManifestService {
  private config: Record<string, any> = {};

  public get(key: string) {
    return this.config[key] ?? '';
  }

  public init({ app_name, env }: CreateAppConfigFactoryArgs) {
    return new Promise((resolve) => {
      this.config = {
        env,
        app_name,
      };

      // TODO: replace logic for fetching the config from server
      setTimeout(() => {
        resolve(true);
      }, 5000);
    });
  }
}
