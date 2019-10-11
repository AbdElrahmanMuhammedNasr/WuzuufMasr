import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataSignUpService {

  constructor() { }

  userDataSignUp: {
    email: null,
    username: null,
    dateOfBirth: null,
    number: null,
    opt: null,
    password: null,
  }

  userDataLogin: {
    email: null,
    password: null,
  }

}
