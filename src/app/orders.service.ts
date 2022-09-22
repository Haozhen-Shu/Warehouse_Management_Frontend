import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl = 'http://localhost:8081/api/orders';

  constructor(private http: HttpClient) {}

  getTotalOrdersShipped(): Observable<number> {
    return this.http.get<any>(`${this.baseUrl}/shipped/count`);
  }
}