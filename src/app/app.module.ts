//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Components
import { EventsAppComponent } from './events-app.component';
import { 
  EventRouteActivatorComponent,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
  
} from './events/index'
import { NavbarComponent } from './nav/navbar-component';
import { Error404Component } from './errors/404.component';

//services/components from Common
import { 
  CollaspsibleWellComponent,
  TOASTR_TOKEN,
  Toastr,
  JQUERY_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';

//services
import { EventService } from './events/shared/event.service';
import { EventListResolverService } from './events/event-list-resolver.service';
import { AuthService } from './user/auth.services';

//config
import { appRoutes } from './routes'

let toastr:Toastr = window['toastr'];
let jquery = window['$'];

@NgModule({
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],

  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollaspsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    Error404Component,
    
  ],

  providers: [
    AuthService,
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr}, 
    {provide: JQUERY_TOKEN, useValue: jquery}, 
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
  return true; 
}
