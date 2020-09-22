import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService} from './shared/event.services'

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events: any[]
    constructor(private eventService: EventService, private toastr: ToastrService){}

    ngOnInit(){
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName);
    }

}