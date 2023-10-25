import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    apiUrl: string = "http://192.168.0.10:4200/user";

    constructor(private http: HttpClient) { }

    findByEmail(email: string) {
        this.http.get(this.apiUrl, email);
    }
}
