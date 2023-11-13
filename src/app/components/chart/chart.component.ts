import { Component, Input } from '@angular/core';
import { ChartData, Color } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  @Input()
  public title = 'Sales';

  @Input()
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  @Input()
  public colors: Color[] = ['#d64a4a', '#27719b', '#48bd8c'];

  @Input()
  public data: number[] = [350, 450, 100];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.data,
        backgroundColor: this.colors,
      },
    ],
  };
}
