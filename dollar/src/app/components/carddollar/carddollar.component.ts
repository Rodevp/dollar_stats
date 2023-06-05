import { Component, OnInit, inject } from '@angular/core';
import { DollarService } from 'src/app/services/dollar.service';
import cheerio from 'cheerio';

@Component({
  selector: 'app-carddollar',
  templateUrl: './carddollar.component.html',
})
export class CarddollarComponent implements OnInit{

  private service = inject(DollarService)
  dollarValue: string = '' 

  dollarToday = () => {
    this.service.getDollarToday()
      .subscribe( (data) => {

        const scrap = cheerio.load(data)
        const valueDollar = scrap('span.exchange-rate')
        const parseDecimal = valueDollar?.text()?.replace(',', '.')
      
        this.service.saveHistory(parseDecimal)

        this.dollarValue = parseDecimal
        localStorage.setItem('dollar', parseDecimal)

      })
  }

  ngOnInit(): void {
    this.dollarToday()
  }


}
