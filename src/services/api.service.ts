import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private currencyValue: string = '';
  private todayApi = environment.apiUrl + '/currentExchangeRate?apiKey=' + environment.apiKey;
  private lastMonthApi = environment.apiUrl + '/dailyExchangeRate?apiKey=' + environment.apiKey;


  constructor(private http: HttpClient) { }

  setCurrencyValue(value: string): void {
    this.currencyValue = value;
  }

  getDados(): Observable<any> {
    return this.http.get(`${this.todayApi}&from_symbol=EUR&to_symbol=BRL`);
  }

  getLastMonth(): Observable<any> {
    return this.http.get(`${this.lastMonthApi}&from_symbol=${this.currencyValue}&to_symbol=BRL`);
  }
}

