import { Component, OnInit } from '@angular/core';
import { LineChartSetup } from 'src/app/interfaces/line-chart-setup';
import { ChartData } from 'src/app/interfaces/chart-data';
import { ChartDataService } from 'src/app/services/chart-data.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MultiLineDataset } from 'src/app/interfaces/multi-line-dataset';
export interface FuelValue {
  value: string;
}
export interface ViolineType {
  tituloGrafico: string;
  imagemBase64: string;
}
@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.scss']
})
export class FuelComponent implements OnInit {
  chartSetup: LineChartSetup;
  veiclesTypes$: Observable<ChartData[]>;
  violines$: Observable<ViolineType>
  avgChartSetup: any;

  initialDate = new FormControl();
  lastDate = new FormControl();

  initialDateVioline = new FormControl();
  lastDateVioline = new FormControl();

  categories: any[];
  avgFuellineDataset: MultiLineDataset[] = [];
  gasolineDataIsDone: boolean;
  ethanolDataIsDone: boolean;
  dieselDataIsDone: boolean;


  constructor(private chartDataService: ChartDataService) { }

  ngOnInit() {
    this.chartSetup = {
      caption: "Distribuição de Clientes No Brasil",
      lineThickness: "2",
      xAxisName: "Anos",
      yAxisName: "Total",
      theme: "ocean",
      subCaption: ""
    }

    this.avgChartSetup = {
      caption: "Valor Médio dos Combustiveis por Mês",
      subCaption: "",
      xAxisName: "Meses",
      theme: "ocean"
    }
    this.veiclesTypes$ = this.chartDataService.getTopVeicles();
  }


  onVioline() {
    let to = new Date(this.lastDateVioline.value);
    let from = new Date(this.initialDateVioline.value);
    this.violines$ = this.chartDataService.getVioline(from, to);
  }



  onFuelAvg() {
    this.dieselDataIsDone = false;
    this.ethanolDataIsDone = false;
    this.dieselDataIsDone = false;
    this.avgFuellineDataset = [];

    let categoties: any[] = [];
    let gasolineValues: FuelValue[] = [];
    let ethanolValues: FuelValue[] = [];
    let dieselValues: FuelValue[] = [];

    let gasoline: ChartData[];
    let ethanol: ChartData[];
    let diesel: ChartData[];

    let to = new Date(this.lastDate.value);
    let from = new Date(this.initialDate.value);
    new Promise(
      (resolve) => {
        this.chartDataService.getAvgByFuel(1, from, to).subscribe(
          data => {
            gasoline = data;
            console.log(data)
            gasoline.forEach(data => {
              categoties.push({
                label: data.label
              })
              gasolineValues.push({
                value: data.value.toString()
              })
            })
          }
        )

        this.chartDataService.getAvgByFuel(2, from, to).subscribe(
          data => {
            data.forEach(data => {
              ethanolValues.push({
                value: data.value.toString()
              });
            }
            )
          }
        )

        this.chartDataService.getAvgByFuel(3, from, to).subscribe(
          data => {
            data.forEach(data => {
              dieselValues.push({
                value: data.value.toString()
              });
            }
            )
          }
        )
        resolve();
      }

    ).then(() => {
      this.avgFuellineDataset.push(
        {
          seriesname: "Gasolina",
          data: gasolineValues
        }
      )
      this.avgFuellineDataset.push(
        {
          seriesname: "Etanol",
          data: ethanolValues
        }
      )
      this.avgFuellineDataset.push(
        {
          seriesname: "Disel",
          data: dieselValues
        }
      )
      console.log("asduaisd")
      console.log(this.avgFuellineDataset)
      console.log(categoties)
      this.categories = categoties;
      this.dieselDataIsDone = true;
    })




  }

}
