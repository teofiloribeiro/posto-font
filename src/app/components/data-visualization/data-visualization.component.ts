import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChartData } from 'src/app/interfaces/chart-data';
import { ChartDataService } from 'src/app/services/chart-data.service';
import { ChartSource } from 'src/app/interfaces/chart-source';


@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.scss']
})
export class DataVisualizationComponent implements OnInit {
  initialDate = new FormControl();
  lastDate = new FormControl();
  chartSource: ChartSource;

  topVeiclesData$: Observable <ChartData[]>

  chartData: ChartData[];

  constructor(private dataService: ChartDataService) {
   }

  ngOnInit() { }

  onSubmit(){
    console.log(this.initialDate.value + " " + this.lastDate.value);
    const date1 = new Date (this.initialDate.value);
    const date2 = new Date (this.lastDate.value);
    
    console.log(date1 +"  "+ date2)

    this.dataService.getTopVeicles().subscribe(
      data => this.chartData = data
    );
  }


  private buildTopVeicles(){
    //this.topVeiclesData$ = this.dataService.getTopVeicles();
    // this.chartSource.chart.caption = "Consumo por tipo de veiculo";
    // this.chartSource.chart.numberSuffix = "K";
    // this.chartSource.chart.xAxisName = "Tipos de Veiculo";
    // this.chartSource.chart.yAxisName = "Quantitivo";
    this.chartSource.data = this.chartData;

    console.log(this.chartData)

  }

}
