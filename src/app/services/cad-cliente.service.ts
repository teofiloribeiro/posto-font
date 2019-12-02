import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Entities/cliente';
import { tap } from 'rxjs/operators';
import { Estado } from '../Entities/estado';
import { Cidade } from '../Entities/cidade';
import { Bairro } from '../Entities/bairro';
import { TipoVeiculo } from '../Entities/tipo-veiculo';

@Injectable({
  providedIn: 'root'
})
export class CadClienteService {

  constructor(private http: HttpClient) { }

  private readonly API = environment.API;
  private readonly createCliente = "/clientes/criar";
  private readonly listarEstados = "/estados";
  private readonly listarCidades = "/cidades";
  private readonly listarBairros = "/bairros";
  private readonly listarTiposVeiculo = "/tipo_veiculo";

  createClient(client: Cliente){
    return this.http.post(`${this.API}${this.createCliente}`, client)
      .pipe(
        tap(
          console.log
        )
      );
  }

  getListaEstados(){
    return this.http.get<Estado[]>(`${this.API}${this.listarEstados}`)
    .pipe(
      tap(
        console.log
      )
    )
  }

  getListaCidades(codEstado: number){
    return this.http.get<Cidade[]>(`${this.API}${this.listarCidades}?codEstado=${codEstado}`)
    .pipe(
      tap(
        console.log
      )
    )
  }

  getListaBairros(codCidade: number){
    return this.http.get<Bairro[]>(`${this.API}${this.listarBairros}?codCidade=${codCidade}`)
    .pipe(
      tap(
        console.log
      )
    )
  }

  getTiposVeiculo(){
    return this.http.get<TipoVeiculo[]>(`${this.API}${this.listarTiposVeiculo}`)
    .pipe(
      tap(
        console.log
      )
    )
  }
}
