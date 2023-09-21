import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommnService {
  url = "http://localhost:3001/emplyee_list"
  urlreg = "http://localhost:3001/users"

  constructor(private http: HttpClient) { }

  getRestoList() {
    return this.http.get(this.url);
  }

  addemployees(data: any) {
    return this.http.post(this.url, data);
  }

  getcurrentdata(id: any): Observable<{ email: string, phone_number: string, address: string }> {
    return this.http.get<{ email: string, phone_number: string, address: string }>(`${this.url}/${id}`);
  }

  deleted(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  updaterests(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  createuser(data: any) {
    return this.http.post(this.urlreg, data);
  }
}