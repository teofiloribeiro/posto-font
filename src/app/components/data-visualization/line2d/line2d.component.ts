import { Component, OnInit, Input } from '@angular/core';
import { ChartSetup } from 'src/app/interfaces/chart-setup';
import { ChartData } from 'src/app/interfaces/chart-data';
import { LineChartSetup } from 'src/app/interfaces/line-chart-setup';

@Component({
  selector: 'app-line2d',
  templateUrl: './line2d.component.html',
  styleUrls: ['./line2d.component.scss']
})
export class Line2dComponent implements OnInit {
  @Input() chartData: ChartData[];
  @Input() chartSetup: LineChartSetup;
  dataSource: Object;
  chartConfig: Object;

  constructor() {
    this.chartConfig = {
      width: '800',
      height: '500',
      type: 'line',
      dataFormat: 'json',
    };
  }

  ngOnInit() {
    this.dataSource = {
      "chart": this.chartSetup,
      "data": this.chartData
    }
  }

}
