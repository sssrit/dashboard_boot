import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartEvent,ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-chart-three',
  templateUrl: './chart-three.component.html',
  styleUrls: ['./chart-three.component.css']
})
export class ChartThreeComponent implements OnInit {
  public mixChartType: ChartType = 'scatter';

  public mixChartData: ChartData = {
    labels: [
      '0',
      '5',
      '10',
      '15'
    ],
    datasets: [{
      type: 'scatter',
      label: 'Scatter Dataset',
      data: [{
        x: 1,
        y: 10
      }, {
        x: 4,
        y: 20
      }, {
        x: 8,
        y: 15
      }, {
        x: 12,
        y: 25
      }],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)'
    }, {
      type: 'line',
      label: 'Line Dataset',
      data: [10,17,29,25],
      fill: false,
      borderColor: 'rgb(54, 162, 235)',
      tension:0.2
    }]
  };

  public mixChartOptions:ChartConfiguration['options'] ={
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins:{
      legend: { 
        display: false 
       },
       title: {
         display:true,
         text:'Age vs Visitor statistics from 2010 to 2016'
       }
   }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
