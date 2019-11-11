import { Component, OnInit, Input } from '@angular/core';
import { ChartSource } from 'src/app/interfaces/chart-source';
import { ChartDataService } from 'src/app/services/chart-data.service';
import { ChartData } from 'src/app/interfaces/chart-data';
import { ChartSetup } from 'src/app/interfaces/chart-setup';

@Component({
  selector: 'app-column2d',
  templateUrl: './column2d.component.html',
  styleUrls: ['./column2d.component.scss']
})
export class Column2dComponent implements OnInit {
  //@Input() chartSource: ChartSource;
  @Input() chartData: ChartData[];
  @Input() chartSetup: ChartSetup;
  dataSource: Object;
  chartConfig: Object;


  constructor() {
    this.chartConfig = {
      width: '800',
      height: '500',
      type: 'column3d',
      dataFormat: 'json',
    };
  }

  ngOnInit() {
    this.dataSource = {
      "chart": this.chartSetup,
      "data": this.chartData
    };
  }

}
