import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/users/login`, {
      email,
      password,
    }).pipe(map(user => {
      if (user) {
        user.authdata = window.btoa(email + ':' + password);
        localStorage.setItem('currentUser', user);
      }
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
