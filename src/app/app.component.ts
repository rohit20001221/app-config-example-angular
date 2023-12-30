import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AppConfigManifestService } from './app-config/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'app-config';

  @ViewChild('customElements') customElementsRef!: ElementRef;

  constructor(public appConfig: AppConfigManifestService) {}

  ngAfterViewInit(): void {
    this.customElementsRef.nativeElement.appendChild(
      document.createElement('x-order-summary')
    );

    const description = document.createElement('x-order-description');
    description.addEventListener('helloEvent', ((
      event: CustomEvent<unknown>
    ) => {
      console.log(event.detail);
    }) as EventListener);

    this.customElementsRef.nativeElement.appendChild(description);
  }
}
