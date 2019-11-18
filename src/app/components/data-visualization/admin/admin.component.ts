import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChartDataService } from 'src/app/services/chart-data.service';
import { MultiLineDataset } from 'src/app/interfaces/multi-line-dataset';
import { MultiLineChartSetup } from 'src/app/interfaces/multi-line-chart-setup';
import { Observable } from 'rxjs';
import { PythonChartsService } from 'src/app/services/python-charts.service';

export interface PythonType {
  tituloGrafico: string;
  imagemBase64: string;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  fuelPrinceInitialDate = new FormControl();
  fuelPriceFinalDate = new FormControl();
  
  topAndLoserInitialDate = new FormControl();
  topAndLoserFinalDate = new FormControl();

  
  fuelPriceSetup: any;

  fuelPriceData$: Observable<any[]>
  topAndLosersData$: Observable<PythonType>

  categories: any[];

  constructor(private chartdataService: ChartDataService, private pyChartsService: PythonChartsService) { }

  ngOnInit() {
  }

  onFuelPrice(){
    let from = new Date(this.fuelPrinceInitialDate.value);
    let to = new Date(this.fuelPriceFinalDate.value);

    this.fuelPriceSetup = {
      caption: "Distribuição de Clientes No Brasil",
      lineThickness: "2",
      xAxisName: "Anos",
      yAxisName: "Total",
      theme: "fusion",
      subCaption: ""
    }

    this.fuelPriceData$ = this.chartdataService.getFuelPrice(from, to);
  }

  onTopAndLoserStations(){
    let from = new Date(this.fuelPrinceInitialDate.value);
    let to = new Date(this.fuelPriceFinalDate.value);

    this.topAndLosersData$ = this.pyChartsService.getTopAndLosers(from,to);
    
  }

}
