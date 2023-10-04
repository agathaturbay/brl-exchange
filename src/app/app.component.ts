import { Component, OnInit } from '@angular/core';
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

  hideInputValue() {
    this.showComponents = false;
  }

  handleInputFocus(event: Event) {
    const target = event.target as HTMLInputElement;
    target.parentElement?.classList.add('focused');
  }

  handleInputBlur(event: Event) {
    const target = event.target as HTMLInputElement;
    const inputValue = target.value;

    if (inputValue === "") {
      target.classList.remove('filled');
      target.parentElement?.classList.remove('focused');
    } else {
      target.classList.add('filled');
    }
  }
}
