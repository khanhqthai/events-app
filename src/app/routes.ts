import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorComponent } from './events/event-details/event-route-activator.component';
import { EventListResolverService } from './events/event-list-resolver.service';


//add or remove application routes below

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, 
    canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorComponent]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)},

   
    
]