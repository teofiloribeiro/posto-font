import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ChartData } from '../interfaces/chart-data';

import { delay, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  private readonly API = environment.API;
  private readonly topVeicles = "/violino/tipo_veiculo_top10";
  private readonly avgFuelPrice = "/combustivel/preco_medio_combustivel";
  private readonly clientsByState = "/clientes/por_estado";
  private readonly clientsByCity = "/clientes/por_cidade";
  private readonly clientsByNeighborhood = "/clientes/por_bairro";


  constructor(private http: HttpClient) { }

  getTopVeicles(){
    return this.http.get<ChartData>(`${this.API}${this.topVeicles}`)
    .pipe(
      tap(
        console.log
      )
    )
  }


}
