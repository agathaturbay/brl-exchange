import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RateNowComponent } from './rate-now/rate-now.component';
import { LastDaysComponent } from './last-days/last-days.component';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from 'src/services/currency.service';
import { RateNowModule } from './rate-now/rate-now.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    RateNowComponent,
    LastDaysComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RateNowModule,
    MatIconModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
