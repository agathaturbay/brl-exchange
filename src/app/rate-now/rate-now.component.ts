import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CurrencyService } from 'src/services/currency.service';

@Component({
  selector: 'app-rate-now',
  templateUrl: './rate-now.component.html',
  styleUrls: ['./rate-now.component.scss']
})
export class RateNowComponent implements OnInit {
  dados: any;

  constructor(private apiService: ApiService, private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.currencyService.setCurrencyValue().subscribe(value => {
      this.apiService.getData(value).subscribe((response) => {
        this.dados = response;
        this.formatValue(this.dados, 'exchangeRate');
      });
    })
  }

  formatValue(objeto: any, property: string): void {
    if (objeto && objeto[property] !== undefined) {
      const valorNumerico = objeto[property].toFixed(2);
      const valorFormatado = valorNumerico.replace('.', ',');
      objeto[property] = valorFormatado;
    }
  }
}
