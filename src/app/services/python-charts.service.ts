import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ChartData } from '../interfaces/chart-data';

import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PythonChartsService {
  private readonly API = environment.PYAPI;
  private readonly veiclesFuels = "/violino/vendas_veiculo_combustivel";
  private readonly topAndLosers= "";
  private readonly salesPerMonth="";

  
  constructor(private http: HttpClient) { }
  getVeiclesFuel(from: Date, to: Date) {
    return this.http.get<any>(`${this.API}${this.veiclesFuels}?data_inicial=${from.toLocaleString()}&data_final=${to.toLocaleString()}`)
      .pipe(
        tap(
          console.log
        )
      )
  }
  getTopAndLosers(from: Date, to: Date){
    return this.http.get<any>(`${this.API}${this.topAndLosers}?data_inicial=${from.toLocaleString()}&data_final=${to.toLocaleString()}`)
      .pipe(
        tap(
          console.log
        )
      )
  }
  getSalesPerMonth(from: Date, to: Date){
    return this.http.get<any>(`${this.API}${this.salesPerMonth}?data_inicial=${from.toLocaleString()}&data_final=${to.toLocaleString()}`)
      .pipe(
        tap(
          console.log
        )
      )
  }
}
