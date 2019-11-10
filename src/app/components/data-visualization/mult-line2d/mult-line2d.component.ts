import { Component, OnInit, Input } from '@angular/core';
import { ChartData } from 'src/app/interfaces/chart-data';
import { ChartSetup } from 'src/app/interfaces/chart-setup';

@Component({
  selector: 'app-mult-line2d',
  templateUrl: './mult-line2d.component.html',
  styleUrls: ['./mult-line2d.component.scss']
})
export class MultLine2dComponent implements OnInit {
  @Input() chartData: ChartData[];
  @Input() chartSetup: ChartSetup;
  dataSource: Object;
  chartConfig: Object;
  constructor() { 
    this.chartConfig = {
      width: '800',
      height: '500',
      type: 'msline',
      dataFormat: 'json',
    };
  }

  ngOnInit() {
    this.dataSource = {
      "chart": {
          "caption": "Number of visitors last week",
          "subCaption": "Bakersfield Central vs Los Angeles Topanga",
          "xAxisName": "Day",
          "theme": "fusion"
      },
      "categories": [
          {
              "category": [
                  {
                      "label": "Mon"
                  },
                  {
                      "label": "Tue"
                  },
                  {
                      "label": "Wed"
                  },
                  
                  {
                      "label": "Thu"
                  },
                  {
                      "label": "Fri"
                  },
                  {
                      "label": "Sat"
                  },
                  {
                      "label": "Sun"
                  }
              ]
          }
      ],
      "dataset": [
          {
              "seriesname": "Bakersfield Central",
              "data": [
                  {
                      "value": "15123"
                  },
                  {
                      "value": "14233"
                  },
                  {
                      "value": "25507"
                  },
                  {
                      "value": "9110"
                  },
                  {
                      "value": "15529"
                  },
                  {
                      "value": "20803"
                  },
                  {
                      "value": "19202"
                  }
              ]
          },
          {
              "seriesname": "Los Angeles Topanga",
              "data": [
                  {
                      "value": "13400"
                  },
                  {
                      "value": "12800"
                  },
                  {
                      "value": "22800"
                  },
                  {
                      "value": "12400"
                  },
                  {
                      "value": "15800"
                  },
                  {
                      "value": "19800"
                  },
                  {
                      "value": "21800"
                  }
              ]
          }
      ],
  }
  }

}
