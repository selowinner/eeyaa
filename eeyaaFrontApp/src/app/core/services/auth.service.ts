import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {User} from '../models/auth.models';
import {CookieService} from './cookie.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  user: User;

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  /**
   * Returns the current user
   */
  public currentUser(): User {
    if (!this.user) {
      this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
    }
    return this.user;
  }

  /**
   * Performs the auth
   * @param email email of user
   * @param password password of user
   */
  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`/api/login`, {email, password})
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            this.user = user;
            // store user details and jwt in cookie
            this.cookieService.setCookie(
              'currentUser',
              JSON.stringify(user),
              1
            );
          }
          return user;
        })
      );
  }

  /**
   * Logout the user
   */
  logout(): void {
    // remove user from local storage to log user out
    this.cookieService.deleteCookie('currentUser');
    this.user = null;
  }
}
