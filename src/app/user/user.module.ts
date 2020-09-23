//Modules
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';

//Components
import {ProfileComponent } from './profile.component';

//config
import { userRoutes } from './user.routes';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations:[
        ProfileComponent
    ]    
})
export class UserModule { }