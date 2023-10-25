import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cost } from '../interface/Cost';

@Injectable({
  providedIn: 'root'
})
export class CostService {

  private apiUrl: string = "http://192.168.0.10:8080/cost";

  constructor(private http: HttpClient) { }
  create(cost: Cost): Observable<Cost> {
    return this.http.post<Cost>(this.apiUrl, cost);

  }

  getAll(): Observable<Cost[]> {
    return this.http.get<Cost[]>(this.apiUrl);
  }


}
