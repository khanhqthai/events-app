//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router'

//Components
import { EventsAppComponent } from './events-app.component';
import { EventRouteActivatorComponent } from './events/event-details/event-route-activator.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail-component';
import { NavbarComponent } from './nav/navbar-component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';


//services
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service'; // simple third-party notification library
import { EventListResolverService } from './events/event-list-resolver.service';


//config
import { appRoutes } from './routes'

@NgModule({
  imports: [
    BrowserModule, // Exports required infrastructure for all Angular apps
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes), // Adds directives and providers for in-app navigation among views defined in an application
  ],

  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    
  ],

  providers: [
    EventService,
    ToastrService, 
    EventRouteActivatorComponent,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolverService
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }


//should define this in another file, just testing out code
export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not save, do you still want to cancel?')
  }
  return true
  
}
