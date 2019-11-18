import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ChartData } from '../interfaces/chart-data';

import { delay, tap, take } from 'rxjs/operators';

export interface FuelValue {
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  private readonly API = environment.API;
  private readonly topVeicles = "/violino/tipo_veiculo_top10";
  private readonly avgFuelPrice = "combustivel/preco_medio_combustivel";
  private readonly clientsByState = "/clientes/por_estado";
  private readonly clientsByCity = "/clientes/por_cidade";
  private readonly clientsByNeighborhood = "/clientes/por_bairro";
  private readonly violine = "/violino/vendas_veiculo_combustivel";
  private readonly fuelPrice = "/combustivel/cotacao_combustivel"; //quoatation


  constructor(private http: HttpClient) { }

  getFuelPrice(from: Date, to: Date) {
    return this.http.get<ChartData[]>(`${this.API}${this.fuelPrice}?dataInicio=${from.toISOString()}&dataFim=${to.toISOString()}`)
      .pipe(
        tap(
          console.log
        )
      )
  }

  getTopVeicles() {
    return this.http.get<ChartData[]>(`${this.API}${this.topVeicles}`)
      .pipe(
        tap(
          console.log
        )
      )
  }

  getAvgByFuel(fuelCod: number, from: Date, to: Date) {
    return this.http.get<ChartData[]>(`${this.API}${this.avgFuelPrice}?combustivelCod=${fuelCod}
                                      &inicio=${from.toISOString()}&fim=${to.toISOString()}`
    )
  }

  getClietesByCountry() {
    return this.http.get<ChartData[]>(`${this.API}${this.clientsByState}`)
      .pipe(
        tap(
          console.log
        )
      )
  }
  getClietesByState(state: string) {
    return this.http.get<ChartData[]>(`${this.API}${this.clientsByCity}?estadoSigla=${state}`)
      .pipe(
        tap(
          console.log
        )
      )
  }

  getClietesByCity(state: string, city: string) {
    return this.http.get<ChartData[]>(`${this.API}${this.clientsByNeighborhood}?cidade=${city}&estadoSigla=${state}`)
      .pipe(
        tap(
          console.log
        )
      )
  }










  getStates() {
    return [
      { value: 'PE', viewValue: 'Pernambuco' },
      { value: 'SP', viewValue: 'São Paulo' }
    ]
  }
  getCities(value: string) {
    switch(value){
      case "PE":
        return this.citiesPE();
      case "SP":
        return this.citiesSP();
    }
  }

  citiesPE(){
    return [
      { value: 'Caruaru', viewValue: 'Caruaru' },
      { value: 'Recife', viewValue: 'Recife' }
    ]
  }
  citiesSP(){
    return [
      { value: 'Campinas', viewValue: 'Campinas' },
      { value: 'Guarulhos', viewValue: 'Guarulhos' },
      { value: 'São Paulo', viewValue: 'São Paulo' }
      
    ]
  }

  private getRange(date1: Date, date2: Date) {

  }



}
