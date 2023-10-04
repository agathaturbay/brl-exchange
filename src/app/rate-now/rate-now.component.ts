import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-rate-now',
  templateUrl: './rate-now.component.html',
  styleUrls: ['./rate-now.component.scss']
})
export class RateNowComponent implements OnInit {
  dados: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDados().subscribe((response) => {
      this.dados = response;
      this.formatarValor(this.dados, 'exchangeRate');
    });
  }

  formatarValor(objeto: any, propriedade: string): void {
    if (objeto && objeto[propriedade] !== undefined) {
      const valorNumerico = objeto[propriedade].toFixed(2);
      const valorFormatado = valorNumerico.replace('.', ',');
      objeto[propriedade] = valorFormatado;
    }
  }
}
