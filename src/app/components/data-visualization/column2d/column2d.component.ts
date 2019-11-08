import { Component, OnInit, Input } from '@angular/core';
 import { ChartSource } from 'src/app/interfaces/chart-source';

@Component({
  selector: 'app-column2d',
  templateUrl: './column2d.component.html',
  styleUrls: ['./column2d.component.scss']
})
export class Column2dComponent implements OnInit {
  @Input() chartSource: ChartSource;
  dataSource: Object;
  chartConfig: Object;
  

  constructor() {
     this.chartConfig = {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
    };
    console.log(this.chartSource)

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
        "caption": this.chartSource ? this.chartSource.chart.caption : "" ,
        "subCaption": this.chartSource ? this.chartSource.chart.subCaption : "",
        "xAxisName": this.chartSource ? this.chartSource.chart.xAxisName : "",
        "yAxisName": this.chartSource ? this.chartSource.chart.yAxisName : "",
        "numberSuffix": this.chartSource ? this.chartSource.chart.numberSuffix : "",
        "theme": this.chartSource ? this.chartSource.chart : "fusion",
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
