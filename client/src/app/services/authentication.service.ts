import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseURL = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  register (user: User): Observable<User> {
    return this.http.post<User>(`${this.baseURL}/api/auth/register`, user).pipe( catchError( err => {
      console.log(err);
      throw err;
    }) )
  }

  login (user: User): Observable<User> {
    return  this.http.post<User>(`${this.baseURL}/api/auth/login`, user).pipe( catchError( err => {
      console.log(err);
      throw err;
    }) )
  }
}
