import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { CurrencyService } from 'src/services/currency.service';

@Component({
  selector: 'app-last-days',
  templateUrl: './last-days.component.html',
  styleUrls: ['./last-days.component.scss']
})
export class LastDaysComponent implements OnInit {
  apiData: any[] = [];
  isPlusIconVisible = true;
  isCardBodyVisible = false;

  constructor(private dataService: ApiService,  private currencyService: CurrencyService) { }

  ngOnInit() {
    this.loadDataFromApi();
  }

  loadDataFromApi() {
    this.currencyService.setCurrencyValue().subscribe(currencyValue => {
      this.dataService.getLastMonth(currencyValue).subscribe(
        (response: any) => this.handleApiResponse(response),
        (error) => this.handleApiError(error)
      );
    });
  }

  private handleApiResponse(response: any) {
    if (response.data.length >= 2) {
      const modifiedData = this.calculateCloseDifferences(response.data);
      this.apiData = modifiedData;
    }
  }

  private calculateCloseDifferences(data: any[]): any[] {
    return data.map((item, index) => {
      if (index < data.length - 1) {
        const currentClose = item.close;
        const previousClose = data[index + 1].close;
        const closeDiff = ((currentClose - previousClose) / previousClose) * 100;
        const roundedCloseDiff = parseFloat(closeDiff.toFixed(2));
        item.closeDiff = roundedCloseDiff;
        this.verifyCloseDiff(item);
      }
      return item;
    });
  }

  private handleApiError(error: any) {
    console.error('Erro na requisição da API:', error);
  }

  verifyCloseDiff(dataItem: any) {
    if (dataItem.closeDiff >= 0) {
      dataItem.cssClass = 'positive';
    } else {
      dataItem.cssClass = 'negative';
    }
  }

  toggleIcon() {
    this.isPlusIconVisible = !this.isPlusIconVisible;
  }

  toggleCardBody() {
    this.isCardBodyVisible = !this.isCardBodyVisible;
  }

}
