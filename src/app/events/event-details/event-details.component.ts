import {Component, OnInit} from '@angular/core'
import {EventService} from '../shared/event.service'
import {ActivatedRoute} from '@angular/router'

@Component({
    styles: [`
        .container { padding-left: 20px; padding-right: 20px;}
        .event-image {height: 100px;}
    `],
    templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit{
    event: any
    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute){}
    
    ngOnInit(){
        this.event =  this.eventService.getEvent(+this.activatedRoute.snapshot.params['id']);
    }
}