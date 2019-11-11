import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChartData } from 'src/app/interfaces/chart-data';
import { ChartDataService } from 'src/app/services/chart-data.service';
import { ChartSource } from 'src/app/interfaces/chart-source';
import { ChartSetup } from 'src/app/interfaces/chart-setup';


@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.scss']
})
export class DataVisualizationComponent implements OnInit {
  initialDate = new FormControl();
  lastDate = new FormControl();
  chartSetup: ChartSetup;

  topVeiclesData$: Observable <ChartData[]>;
  avgFuelType$:  Observable <ChartData[]>;

  chartData: ChartData[];

  constructor(private dataService: ChartDataService) {
  }
    

  ngOnInit() {
    this.topVeiclesData$ = this.dataService.getTopVeicles();
    console.log("dataVisualiation: "+ this.topVeiclesData$);
   }

  onSubmit(){
    console.log(this.initialDate.value + " " + this.lastDate.value);
    const date1 = new Date (this.initialDate.value);
    const date2 = new Date (this.lastDate.value);
    
    console.log(date1.toISOString() +"  "+ date2)

  }


  private buildTopVeicles(){
    let to = new Date (this.initialDate.value);
    let from = new Date (this.lastDate.value);
    //this.avgFuelType$ = this.dataService.getAvgByFuel(1,to,from);
    this.dataService.getAvgByFuel(1,to,from);
    


  }

}
