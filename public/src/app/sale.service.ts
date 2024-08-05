import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from './home/home.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private baseUrl = 'http://localhost:3000/api/sales';

  constructor(private http: HttpClient) { }

  getByStoreLocationAndCustomerEmail(offset: number, count: number, storeLocation: string, customerEmail: string): Observable<Sale[]> {
    let params = new HttpParams()
      .set('offset', offset)
      .set('count', count);

    return this.http.get<Sale[]>(`${this.baseUrl}/storeLocation/${storeLocation}/customerEmail/${customerEmail}`, { params });
  }  
}
