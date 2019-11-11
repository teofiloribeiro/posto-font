import { Component, OnInit, Input } from '@angular/core';
import { ChartData } from 'src/app/interfaces/chart-data';
import { ChartSetup } from 'src/app/interfaces/chart-setup';
import { MultiLineDataset } from 'src/app/interfaces/multi-line-dataset';

@Component({
  selector: 'app-mult-line2d',
  templateUrl: './mult-line2d.component.html',
  styleUrls: ['./mult-line2d.component.scss']
})
export class MultLine2dComponent implements OnInit {
  @Input() chartSetup: ChartSetup;
  @Input() dataset: MultiLineDataset[];
  @Input() categories: any[];

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
    console.log("from multline")
    console.log(this.chartSetup)
    console.log(this.dataset)
    console.log(this.categories)



    this.dataSource = {
      "chart": this.chartSetup,
      "categories": [
          {
              "category": this.categories
          }
      ],
      "dataset": this.dataset,
  }
  }

}
