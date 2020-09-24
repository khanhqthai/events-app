import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from "./shared/index";

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {float: right; color: #df691a; padding-left: 10px;}
      .error input { background-color: #d4c9c1;}
      .error ::-webkit-input-placeholder { color: #fff;}
      .error ::-moz-placeholder { color: #fff; }
      .error :-moz-placeholder { color: #fff; }
      .error :ms-input-placeholder { color: #fff;}
    `
  ]
})
export class CreateEventComponent {
  isDirty: boolean = true;
  newEvent: any
  constructor(private eventService: EventService, private router: Router) {}
  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
  }
  cancel() {
    this.router.navigate(['/events']);
  }
}
