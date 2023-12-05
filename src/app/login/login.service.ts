import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  list() {

  }

  toAuth() {
    localStorage.setItem('login', 'sim');
  }

  userLogged(user: string) {
    localStorage.setItem('user', user);
  }
  genderLogged(gender: string) {
    localStorage.setItem('gender', gender);
  }

  toUnlogin() {
    localStorage.clear();
  }

  getStatusLogin = () => !!localStorage.getItem('login');
}
