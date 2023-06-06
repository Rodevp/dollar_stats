import { Component, OnInit, inject } from '@angular/core';
import { DollarService } from 'src/app/services/dollar.service';

@Component({
  selector: 'app-carddollar',
  templateUrl: './carddollar.component.html',
})
export class CarddollarComponent implements OnInit {

  private service = inject(DollarService)
  dollarValue: string = ''

  dollarToday = () => {
    this.service.getDollarToday()
      .subscribe((data) => {

        this.dollarValue = data?.value
        this.service.saveHistory(data?.value)
        localStorage.setItem('dollar', data?.value)

      })
  }

  ngOnInit(): void {
    this.dollarToday()
  }


}
