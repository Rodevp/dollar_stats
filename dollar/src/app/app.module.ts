import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarddollarComponent } from './components/carddollar/carddollar.component';
import { CardchartsComponent } from './components/cardcharts/cardcharts.component';
import { CardcalculatorComponent } from './components/cardcalculator/cardcalculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CarddollarComponent,
    CardchartsComponent,
    CardcalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
