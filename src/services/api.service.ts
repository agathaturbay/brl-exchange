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

  getDados(): Observable<any> {
    console.log(`${this.todayApi}&from_symbol=USD&to_symbol=BRL`)
    return this.http.get(`${this.todayApi}&from_symbol=USD&to_symbol=BRL`);
  }


  getLastMonth(): Observable<any> {
    console.log(`${this.lastMonthApi}&from_symbol=USD&to_symbol=BRL`)
    return this.http.get(`${this.lastMonthApi}&from_symbol=USD&to_symbol=BRL`);
  }
}

