import {Component, Input} from '@angular/core'

@Component({
    templateUrl: './event-details.component.html'
})
export class EventDetailsComponent{
    @Input() event: any
}