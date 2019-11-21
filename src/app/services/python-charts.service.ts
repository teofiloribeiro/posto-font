import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ChartData } from '../interfaces/chart-data';

import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators';
import { PythonType } from '../interfaces/python-type';

@Injectable({
  providedIn: 'root'
})

export class PythonChartsService {
  private readonly API = environment.PYAPI;
  private readonly veiclesFuels = "/violino/vendas_veiculo_combustivel";
  private readonly topAndLosers= "";
  private readonly salesPerMonth="";
  private readonly seasonalityPerWeek="/vendas/sazonalidade/semanal";
  private readonly seasonalityPerMonth="/vendas/sazonalidade/mensal";
  private readonly seasonalityPerYear="/vendas/sazonalidade/anual";

  
  constructor(private http: HttpClient) { }
  getVeiclesFuel(from: Date, to: Date) {
    return this.http.get<PythonType>(`${this.API}${this.veiclesFuels}?data_inicial=${from.toISOString()}&data_final=${to.toISOString()}`)
      .pipe(
        tap(
          console.log
        )
      )
  }
  getTopAndLosers(from: Date, to: Date){
    return this.http.get<PythonType>(`${this.API}${this.topAndLosers}?data_inicial=${from.toISOString()}&data_final=${to.toISOString()}`)
      .pipe(
        tap(
          console.log
        )
      )
  }
  getSalesPerMonth(from: Date, to: Date){
    return this.http.get<PythonType>(`${this.API}${this.salesPerMonth}?data_inicial=${from.toISOString()}&data_final=${to.toISOString()}`)
      .pipe(
        tap(
          console.log
        )
      )
  }

  getSeasonalityPerWeek(from: Date, to: Date) {
    return this.http.get<PythonType>(`${this.API}${this.seasonalityPerWeek}?data_inicial=${from.toISOString()}&data_final=${to.toISOString()}`)
      .pipe(
        tap(
          console.log
        )
      )
  }
  getSeasonalityPerMonth(from: Date, to: Date) {
    return this.http.get<PythonType>(`${this.API}${this.seasonalityPerMonth}?data_inicial=${from.toISOString()}&data_final=${to.toISOString()}`)
      .pipe(
        tap(
          console.log
        )
      )
  }
  getSeasonalityPerYear(from: Date, to: Date) {
    return this.http.get<PythonType>(`${this.API}${this.seasonalityPerYear}?data_inicial=${from.toISOString()}&data_final=${to.toISOString()}`)
      .pipe(
        tap(
          console.log
        )
      )
  }
}
