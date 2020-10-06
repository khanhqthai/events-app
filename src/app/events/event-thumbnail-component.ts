import { Component, Input } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div
      [routerLink]="['/events', event.id]"
      class="card-body well hoverwell thumbnail"
    >
      <h2>{{ event?.name | uppercase }}</h2>
      <div>Date: {{ event?.date | date:'short' }}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early) </span>
        <span *ngSwitchCase="'10:00 am'">(Late) </span>
        <span *ngSwitchDefault>(Normal)</span>
      </div>

      <div>Price: {{ event?.price | currency:'USD'}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location.address }}</span>
        <span class="pad-left"
          >{{ event?.location.city }}, {{ event?.location.country }}</span
        >
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{ event?.onlineUrl }}
        <div></div>
      </div>
    </div>
  `,
  styles: [
    `
      .highlight {
        color: gold !important;
      }
      .bold {
        font-weight: bold;
      }
      .pad-left {
        margin-left: 10px;
      }
      .thumbnail {
        min-height: 230px;
      }
      .well div {
        color: #b0a299;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  // input decorator, receives  data from parent
  @Input() event: IEvent;
  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') return 'highlight bold';
    return '';
  }
}
