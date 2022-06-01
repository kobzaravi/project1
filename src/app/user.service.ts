import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='http://localhost:3000/users'
  constructor(private http: HttpClient) { }
  getAllUser() {
    return this.http.get( this.url );
  }
  saveUserData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }
}
