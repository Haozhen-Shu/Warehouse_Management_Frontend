import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  getTotalOrdersShipped() {
    return this.http.get<any>(`${this.baseUrl}/totalshipped`);
  }

  getPendingOrders(){
    return this.http.get<any>(`${this.baseUrl}/pending`);
  }
  getTableOrders(){
    return this.http.get<any>(`${this.baseUrl}/all`);
  }
  updateOrderStatus(){
    //return this.http.put<any>(`${this.baseUrl}/update/${id}/${s}`, orders)
  }
}