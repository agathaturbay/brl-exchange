import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-last-days',
  templateUrl: './last-days.component.html',
  styleUrls: ['./last-days.component.scss']
})
export class LastDaysComponent implements OnInit {
  apiData: any[] = [];

  constructor(private dataService: ApiService) { }

  ngOnInit() {
    this.loadDataFromApi();
  }

  loadDataFromApi() {
    this.dataService.getLastMonth().subscribe((response: any) => {
      if (response.data.length >= 2) {
        for (let i = 0; i < response.data.length - 1; i++) {
          const currentClose = response.data[i].close;
          const previousClose = response.data[i + 1].close;
          const closeDiff = ((currentClose - previousClose) / previousClose) * 100;

          const roundedCloseDiff = closeDiff.toFixed(2);

          response.data[i].closeDiff = parseFloat(roundedCloseDiff);
        }
      }

      this.apiData = response.data;
    });
  }
}
