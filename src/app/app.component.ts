import { Component, OnInit } from '@angular/core';
import { AppConfigManifestService } from './app-config/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-config';

  constructor(public appConfig: AppConfigManifestService) {}
}
