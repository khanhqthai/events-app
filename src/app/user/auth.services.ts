import { Injectable } from '@angular/core';
import { IUser } from './user.model';
@Injectable()
export class AuthService {
  currentUser: IUser;
  // fake login method, implement complete later
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: 'Khanh',
      firstName: 'Khanh',
      lastName: 'Snow',
    };
  }

  isAuthenicated(){
      return !!this.currentUser;
  }
}
