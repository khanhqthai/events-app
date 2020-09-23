import { Component } from "@angular/core";
import { AuthService } from '../user/auth.services';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active{ color: #F97924;}
    `]
})
export class NavbarComponent{
    constructor(public authService:AuthService){
        
    }
}