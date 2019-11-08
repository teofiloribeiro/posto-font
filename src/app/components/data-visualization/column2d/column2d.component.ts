import { Component, OnInit } from '@angular/core';
import { ChartSource } from 'src/app/interfaces/chart-source';

@Component({
  selector: 'app-column2d',
  templateUrl: './column2d.component.html',
  styleUrls: ['./column2d.component.scss']
})
export class Column2dComponent implements OnInit {

  dataSource: Object;
  chartConfig: Object;
  chartSource: ChartSource;

  constructor() {
     this.chartConfig = {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
    };

  // this.chartSource.chart.caption = "Countries With Most Oil Reserves [2017-18]";
  // this.chartSource.chart.subCaption = "In MMbbl = One Million barrels";
  // this.chartSource.chart.xAxisName = "Country";
  // this.chartSource.chart.yAxisName = "Reserves (MMbbl)";
  // this.chartSource.chart.numberSuffix = "K";
  // this.chartSource.chart.theme = "fusion";
  // this.chartSource.data = [{
  //   label: "Venezuela",
  //   value: "290"
  // }];
  


  this.dataSource = {
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
      },
      "data": [{
        "label": "Venezuela",
        "value": "290"
      }, {
        "label": "Saudi",
        "value": "260"
      }, {
        "label": "Canada",
        "value": "180"
      }, {
        "label": "Iran",
        "value": "140"
      }, {
        "label": "Russia",
        "value": "115"
      }, {
        "label": "UAE",
        "value": "100"
      }, {
        "label": "US",
        "value": "30"
      }, {
        "label": "China",
        "value": "30"
      }]
    };

   }

  ngOnInit() {
  }

}
