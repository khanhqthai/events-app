import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService, IEvent } from './shared/index';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve(): Observable<IEvent[]> {
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
