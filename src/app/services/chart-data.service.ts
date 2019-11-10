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


  constructor(private http: HttpClient) { }

  getTopVeicles() {
    return this.http.get<ChartData[]>(`${this.API}${this.topVeicles}`)
      .pipe(
        tap(
          console.log
        )
      )
  }

  async getAvgByFuel (fuelCod: number, from: Date, to: Date)  {
    let gasoline: ChartData[];
    let ethanol: ChartData[];
    let diesel: ChartData[];
    let categoties: any[] = [];
    let gasolineValues: FuelValue[] = [];
    let ethanolValues: FuelValue[] = [];
    let dieselValues: FuelValue[] = [];

    await this.http.get<ChartData[]>(`${this.API}${this.avgFuelPrice}?combustivelCod=1
                                      &inicio=${from.toISOString()}&fim=${to.toISOString()}`
    ).subscribe(
      data => {
        gasoline = data;
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
    await this.http.get<ChartData[]>(`${this.API}${this.avgFuelPrice}?combustivelCod=2
                                      &inicio=${from.toISOString()}&fim=${to.toISOString()}`
    ).subscribe(
      data => {
        data.forEach(data => {
          ethanolValues.push({
            value: data.value.toString()
          });
        }
        )
      }
    )
    await this.http.get<ChartData[]>(`${this.API}${this.avgFuelPrice}?combustivelCod=3
                                      &inicio=${from.toISOString()}&fim=${to.toISOString()}`
    ).subscribe(
      data => {
        data.forEach(data => {
          dieselValues.push({
            value: data.value.toString()
          });
        }
        )
      }
    )



    console.log(categoties);

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
      { value: 'SP', viewValue: 'São Paulo' },
      { value: 'RJ', viewValue: 'Rio de Janeiro' }
    ]
  }
  getCities() {
    return [
      { value: 'Paulista', viewValue: 'Paulista' },
      { value: 'Recife', viewValue: 'Recife' },
      { value: 'Olinda', viewValue: 'Olinda' }
    ]
  }

  private getRange(date1: Date, date2: Date) {

  }

  getData() {
    return [{
      "label": "Venezuela",
      "value": "290"
    }, {
      "label": "Saudi",
      "value": "260"
    }, {
      "label": "Canada",
      "value": "180"
    }, {
      "label": "Iran",
      "value": "140"
    }, {
      "label": "Russia",
      "value": "115"
    }, {
      "label": "UAE",
      "value": "100"
    }, {
      "label": "US",
      "value": "30"
    }, {
      "label": "China",
      "value": "30"
    }]
  }

}
