import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartEvent,ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-chart-two',
  templateUrl: './chart-two.component.html',
  styleUrls: ['./chart-two.component.css']
})
export class ChartTwoComponent implements OnInit {
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> ={

    labels:['2010','2012','2014','2016'],
    datasets:[
      { 
        data: [10000,22000,5000,82000],

        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)'
        ],
        borderWidth: 1
        
      }
    ],
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'y',
    plugins:{
       legend: { 
         display: false 
        },
        title: {
          display:true,
          text:'Visitor statistics from 2010 to 2016'
        }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
