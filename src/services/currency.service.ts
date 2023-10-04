import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  public currency = new BehaviorSubject<string>("");

  constructor() { }

  getCurrencyValue(value: string) {
    this.currency.next(value);
  }

  setCurrencyValue() {
    return this.currency.asObservable();
  }
}
