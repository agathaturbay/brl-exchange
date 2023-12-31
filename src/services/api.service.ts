import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private todayApi = environment.apiUrl + '/currentExchangeRate?apiKey=' + environment.apiKey;
  private lastMonthApi = environment.apiUrl + '/dailyExchangeRate?apiKey=' + environment.apiKey;

  constructor(private http: HttpClient) { }

  getData(coin: string): Observable<any> {
    return this.http.get(`${this.todayApi}&from_symbol=${coin}&to_symbol=BRL`);
  }

  getLastMonth(coin: string): Observable<any> {
    return this.http.get(`${this.lastMonthApi}&from_symbol=${coin}&to_symbol=BRL`);
  }
}

