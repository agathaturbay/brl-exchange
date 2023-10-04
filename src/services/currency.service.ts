import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private currencyValueSubject = new Subject<string>();
  currencyValue$ = this.currencyValueSubject.asObservable();


  setCurrencyValue(value: string) {
console.log('✌️value --->', value);
    this.currencyValueSubject.next(value);
console.log('✌️this.currencyValueSubject --->', this.currencyValueSubject);
  }
}
