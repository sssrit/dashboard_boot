import { Component, OnInit ,ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-chart-one',
  templateUrl: './chart-one.component.html',
  styleUrls: ['./chart-one.component.css']
})
export class ChartOneComponent implements OnInit {

  public lineChartType: ChartType = 'line';



  
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 4000,3500,4500,3800,4500,3600],
        label: 'Series A',
        borderColor: '#fd3409',
        fill: 'origin',
        tension: 0.2
      },
      {
        data: [ 4600,4100,9000,7400,6600,7200],
        label: 'Series B',
        borderColor: '#32e9f0',        
        fill: 'origin',
        tension: 0.2

      },
      {
        data: [ 5600,5100,10000,8400,7600,8200 ],
        label: 'Series C',        
        borderColor: '#e5f032',        
        fill: 'origin',
        tension: 0.2

      }
    ],
    labels: [ 'Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']
  };
  

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive:true,
    
  };

  constructor() { }

  ngOnInit(): void {
  }

}
