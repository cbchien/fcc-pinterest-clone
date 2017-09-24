import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/map'

import { User } from '../helpers/user';
import { retry } from '../helpers/retry';

@Injectable()
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  private userStream: Observable<User>;

  constructor(private http: Http) {
    this.userSubject = new BehaviorSubject(null);
    this.userStream = this.userSubject.asObservable();
  }

  logout(): void {
    this.http
      .get('/auth/logout')
      .retryWhen(retry())
      .subscribe(() => this.userSubject.next(null));
  }

  getUser(refresh = false): Observable<User> {
    if (refresh) {
      this.http
        .get('/auth/me')
        .map(res => res.json().user as User)
        .retryWhen(retry())
        .subscribe(
          (user) => this.userSubject.next(user),
          () => this.userSubject.next(null),
        );
    }

    return this.userStream;
  }
}