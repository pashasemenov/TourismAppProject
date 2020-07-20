import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../models/Country";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getCounties(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseURL}/api/getCountry`);
  }
}
