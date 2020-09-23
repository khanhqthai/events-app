import { ActivatedRouteSnapshot, CanActivate, Router, } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivatorComponent implements CanActivate{
    constructor(private eventService: EventService, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot) {
        // !! to cast even to boolean, + to cast id to number
        const eventExists = !!this.eventService.getEvent(+route.params['id']);
        
        if(!eventExists){
            this.router.navigate(['/404'])
        }
        return eventExists
    }

}