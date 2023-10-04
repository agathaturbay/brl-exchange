import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'brl-exchange';
  currencyValue: string = '';
  showComponents: boolean = false;

  constructor(private ApiService: ApiService) {}

  showInputValue() {
    this.ApiService.setCurrencyValue(this.currencyValue);
    this.showComponents = true;
  }

}
