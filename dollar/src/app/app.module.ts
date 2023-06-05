import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarddollarComponent } from './components/carddollar/carddollar.component';
import { CardchartsComponent } from './components/cardcharts/cardcharts.component';
import { CardcalculatorComponent } from './components/cardcalculator/cardcalculator.component';
import { CalculateDollarPipe } from './pipes/calculate-dollar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarddollarComponent,
    CardchartsComponent,
    CardcalculatorComponent,
    CalculateDollarPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
