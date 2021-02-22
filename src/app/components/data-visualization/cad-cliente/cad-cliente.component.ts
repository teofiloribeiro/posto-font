import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Endereco } from 'src/app/Entities/endereco';
import { Telefone } from 'src/app/Entities/telefone';
import { ChartDataService } from 'src/app/services/chart-data.service';
import { EnumTipoTelefone } from 'src/app/Enums/tipo-telefone';
import { CadClienteService } from 'src/app/services/cad-cliente.service';
import { PessoaFisica } from 'src/app/Entities/pessoa-fisica';
import { PessoaJuridica } from 'src/app/Entities/pessoa-juridica';
import { Estado } from 'src/app/Entities/estado';
import { Cidade } from 'src/app/Entities/cidade';
import { Bairro } from 'src/app/Entities/bairro';
import { Observable } from 'rxjs';
import { Veiculo } from 'src/app/Entities/veiculo';
import { TipoVeiculo } from 'src/app/Entities/tipo-veiculo';
import { DataMining } from 'src/app/Entities/dataMining';

export interface SelectType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.scss']
})
export class CadClienteComponent  implements OnInit {

  dataMining:DataMining;

  pessoa: any;
  endereco: Endereco;
  telefone: Telefone;
  veiculo: Veiculo;
  tiposVeiculo: TipoVeiculo[];

  estados: Estado[];
  estadoEscolhido: Estado;
  cidades: Cidade[];
  cidadeEscolhida: Cidade;
  bairros: Bairro[];

  tiposTelefone: string[];
  tiposCliente: string[] = ["PF", "PJ"];
  clienteEscolhido: string;

  sexos: string[] = ["M", "F"];
  

  constructor(private cadCliService: CadClienteService) {
    
  }

  ngOnInit() {
    this.dataMining = new DataMining();
    this.endereco = new Endereco();
    this.telefone = new Telefone();
    this.veiculo = new Veiculo();
    this.cadCliService.getListaEstados().subscribe(response =>{
     this.estadosConstructor(response);
    });

    this.tiposTelefone = Object.keys(EnumTipoTelefone);
  }

  onSubmit(f: NgForm) {
    this.dataMining.estado = this.estadoEscolhido;
    this.dataMining.cidade = this.cidadeEscolhida;
    this.dataMining.bairro = this.endereco.bairro;
    this.dataMining.modelo = this.veiculo.modelo;
    this.cadCliService.dataMining(this.dataMining).subscribe();
    // this.pessoa.enderecos.push(this.endereco);
    // this.pessoa.telefones.push(this.telefone);
    // this.cadCliService.createClient(this.pessoa).subscribe();
  }

  onClienteEscolhido(){
    switch(this.clienteEscolhido){
      case "PF":
        this.pessoa = new PessoaFisica();
      case "PJ":
        this.pessoa = new PessoaJuridica();
        this.dataMining.sexo = 'I';
    }
    this.dataMining.tipoPessoa = this.clienteEscolhido;
  }

  listarCidades(){
    this.cadCliService.getListaCidades(this.estadoEscolhido.cod).subscribe(response=>{
      //this.cidades=response;
      this.cidadesConstructor(response);
    });
  }

  listarBairros(){
    this.cadCliService.getListaBairros(this.cidadeEscolhida.cod).subscribe(response=>{
      this.bairrosConstructor(response);
    });
  }

  estadosConstructor(resposta: Observable<any>[]){
    this.estados = [];
    resposta.forEach(e=>{
      const estado = new Estado();
      estado.cod = e[0];
      estado.sigla = e[1];
      estado.nome = e[2];
      this.estados.push(estado);
    })
  }

  cidadesConstructor(resposta: Observable<any>[]){
    this.cidades = [];
    resposta.forEach(c=>{
      const cidade = new Cidade();
      cidade.cod = c[0];
      cidade.nome = c[1];
      cidade.estado = this.estadoEscolhido;
      this.cidades.push(cidade);
    })
  }

  bairrosConstructor(resposta: Observable<any>[]){
    this.bairros = [];
    resposta.forEach(b=>{
      const bairro = new Bairro();
      bairro.cod = b[0];
      bairro.nome = b[1];
      bairro.cidade = this.cidadeEscolhida;
      this.bairros.push(bairro);
    })
  }

}
