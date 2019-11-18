import { Component, OnInit } from '@angular/core';
import { ChartDataService } from 'src/app/services/chart-data.service';
import { Observable } from 'rxjs';
import { ChartData } from 'src/app/interfaces/chart-data';
import { ChartSetup } from 'src/app/interfaces/chart-setup';

export interface SelectType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  //Dropbox
  states: SelectType[];
  cities: SelectType[];

  //Charts Config
  clientesByStateChart:ChartSetup;
  clientesByCityChart:ChartSetup;
  clientesByCountryChart: ChartSetup;
  veiclesTypesChart: ChartSetup;

  //Dorpbox Selected
  clientesByState: string;
  clientesByCityState:string;
  clientsByCityCity: string;

  //Get chart data
  clientesByState$: Observable <ChartData[]>;
  clientesByCity$: Observable <ChartData[]>;
  clientesByCountry$: Observable <ChartData[]>;
  veiclesTypes$: Observable <ChartData[]>;

  constructor(private chartdataService: ChartDataService) { 
    this.states = chartdataService.getStates();
  }

  ngOnInit() {
    this.clientesByCountryChart={
      caption: "Distribuição de Clientes No Brasil",
      numberSuffix: "K",
      xAxisName: "Estados",
      yAxisName: "Clientes",
      theme: "fusion",
      subCaption: ""
    }

    this.veiclesTypesChart= {
      caption: "Tipo de Veiculos dos Nossos Clientes",
      numberSuffix: "K",
      xAxisName: "Tipos de Veiculos",
      yAxisName: "Veiculos",
      theme: "fusion",
      subCaption: ""
    }

    this.clientesByCountry$ = this.chartdataService.getClietesByCountry();
    this.veiclesTypes$ = this.chartdataService.getTopVeicles();


  }
  onStateSelected(value: string){
    console.log(value);
    this.cities = this.chartdataService.getCities(value);
  }


  onSubmitByState(){
    this.clientesByStateChart = {
      caption: "Clientes Por Estado",
      numberSuffix: "K",
      xAxisName: "Cidades",
      yAxisName: "Clientes",
      theme: "fusion",
      subCaption: ""
    }
    console.log(this.clientesByStateChart)
     
    this.clientesByState$ = this.chartdataService.getClietesByState(this.clientesByState);
  }
  onSubmitByCity(){
    this.clientesByCityChart ={
      caption: "Distribuição de Clientes Por Cidades",
      numberSuffix: "K",
      xAxisName: "Bairros",
      yAxisName: "Clientes",
      theme: "fusion",
      subCaption: ""
    }
    console.log(this.clientesByCityState+ " "+this.clientsByCityCity)
    this.clientesByCity$ = this.chartdataService.getClietesByCity(this.clientesByCityState,this.clientsByCityCity);
  }
  

}
