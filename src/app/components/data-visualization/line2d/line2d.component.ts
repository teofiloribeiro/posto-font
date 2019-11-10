import { Component, OnInit, Input } from '@angular/core';
import { ChartSetup } from 'src/app/interfaces/chart-setup';
import { ChartData } from 'src/app/interfaces/chart-data';

@Component({
  selector: 'app-line2d',
  templateUrl: './line2d.component.html',
  styleUrls: ['./line2d.component.scss']
})
export class Line2dComponent implements OnInit {
  @Input() chartData: ChartData[];
  @Input() chartSetup: ChartSetup;
  dataSource: Object;
  chartConfig: Object;

  constructor() {
   this.chartConfig = {
    width: '800',
    height: '500',
    type: 'line',
    dataFormat: 'json',
  }; }

  ngOnInit() {

    this.dataSource = {
      "chart": {
          "theme": "fusion",
          "caption": "Total footfall in Bakersfield Central",
          "subCaption": "Last week",
          "xAxisName": "Day",
          "yAxisName": "No. of Visitors",
          "lineThickness": "2"
      },
      "data": [
          {
              "label": "Mon",
              "value": "15123"
          },
          {
              "label": "Tue",
              "value": "14233"
          },
          {
              "label": "Wed",
              "value": "23507"
          },
          {
              "label": "Thu",
              "value": "9110"
          },
          {
              "label": "Fri",
              "value": "15529"
          },
          {
              "label": "Sat",
              "value": "20803"
          },
          {
              "label": "Sun",
              "value": "19202"
          }
      ],
      
  }
  }

}
