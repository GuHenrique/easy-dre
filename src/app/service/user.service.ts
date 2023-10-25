import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "http://192.168.0.10:8080/user"

  constructor(private http: HttpClient) { }
}
