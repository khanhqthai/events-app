import { Component } from '@angular/core';
import { AuthService } from './auth.services';
import { Router } from '@angular/router';
@Component({
  templateUrl: './login.component.html',
  styles: [`
    em {float: right; color:#df691a; padding-left:10px}
  `]
})
export class LoginComponent {
    userName: string;
    password: string;
    mouseoverLogin: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }
  cancel() {
    this.router.navigate(['events']);
  }
}
