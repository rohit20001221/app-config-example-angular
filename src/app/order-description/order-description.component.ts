import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-description',
  template: '<h1 (click)="onClick()">order description</h1>',
})
export class OrderDescriptionComponent {
  @Output('helloEvent')
  public event = new EventEmitter();

  onClick() {
    this.event.emit({ data: 'Hello World' });
  }
}
