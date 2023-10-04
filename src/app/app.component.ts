import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { CurrencyService } from 'src/services/currency.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'brl-exchange';
  currencyValue: string = '';
  showComponents: boolean = false;

  constructor(private currencyService: CurrencyService) {}

  showInputValue() {
    this.showComponents = true;
    this.currencyService.setCurrencyValue(this.currencyValue);
  }

}
