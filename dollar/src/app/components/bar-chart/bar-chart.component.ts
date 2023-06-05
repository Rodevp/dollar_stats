import { Component, OnInit, inject } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DollarService } from 'src/app/services/dollar.service';
Chart.register(...registerables)

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent implements OnInit {

  private service = inject(DollarService)
  labels: String[] | Number[] = []

  getHistory = async () => {
    const response = await this.service.getHistory()
    return response
  }

  ngOnInit(): void {

    this.getHistory()
      .then(data => {

        const valuesNumber = data?.map( item => Number( item.toString().replace('.', '').replace('.','') ) )

        const ctx: any = document.getElementById("chart")
        
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: [...data],
            datasets: [{
              label: 'Ultimos valores del dolar',
              data: [...valuesNumber],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

      })

  }

}
