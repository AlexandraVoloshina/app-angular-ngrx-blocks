import { Injectable, signal } from '@angular/core';
import { IAuthUser } from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthSig = signal<boolean>(false)

  constructor() {
    const token = localStorage.getItem('token');
    this.isAuthSig.set(!!token);
   }

  login(loginData: IAuthUser){
    let result: any = {};
    if(loginData.email === 'test@test.ua'){
      result = {
        'id': 0,
        'email': "test@test.ua",
        'token': 'eyJ1c2VyX2lkIjoxLCJleHAiOjE1ODEzNTcwMzl9'
      };
      localStorage.setItem('token', result.token);
      this.isAuthSig.set(true);
    } else {
      result = 'not valid'
    }
    return result;
  }
}
