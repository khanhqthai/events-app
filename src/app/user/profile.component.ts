import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.services';
import { IUser } from './user.model';

@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
      em {
        float: right;
        color: #df691a;
        padding-left: 10px;
      }
      .error input {
        background-color: #d4c9c1;
      }
      .error ::-webkit-input-placeholder {
        color: #fff;
      }
      .error ::-moz-placeholder {
        color: #fff;
      }
      .error :-moz-placeholder {
        color: #fff;
      }
      .error :ms-input-placeholder {
        color: #fff;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(private authService: AuthService, private route: Router) {}
  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
  saveProfile(formValue): void {
    if (this.profileForm.valid) {
      let user: IUser = {
        id: 1,
        userName: formValue.firstName,
        firstName: formValue.firstName,
        lastName: formValue.lastName,
      };
      this.authService.updateCurrentUser(user);
      this.route.navigate(['events']);
    }
  }
  cancel(): void {
    this.route.navigate(['events']);
  }
}
