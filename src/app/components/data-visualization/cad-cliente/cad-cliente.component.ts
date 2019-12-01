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

  pessoa: any;
  endereco: Endereco;
  telefone: Telefone;

  estados: Estado[];
  estadoEscolhido: Estado;
  cidades: Cidade[];
  cidadeEscolhida: Cidade;
  bairros: Bairro[];

  tiposTelefone: string[];
  tiposCliente: string[] = ["Pessoa Física", "Pessoa Jurídica"];
  clienteEscolhido: string;
  

  constructor(private cadCliService: CadClienteService) {
    
  }

  ngOnInit() {
    this.endereco = new Endereco();
    this.telefone = new Telefone();
    this.cadCliService.getListaEstados().subscribe(response =>{
      this.estados = response;
      this.estados.forEach(estado=>{
        console.log(estado.nome);
      });
    });
    this.tiposTelefone = Object.keys(EnumTipoTelefone);
  }

  onSubmit(f: NgForm) {
    this.pessoa.enderecos.push(this.endereco);
    this.pessoa.telefones.push(this.telefone);
    this.cadCliService.createClient(this.pessoa).subscribe();
  }

  onClienteEscolhido(){
    switch(this.clienteEscolhido){
      case "Pessoa Física":
        this.pessoa = new PessoaFisica();
      case "Pessoa Jurídica":
        this.pessoa = new PessoaJuridica();
    }
  }

  listarCidades(){
    this.cadCliService.getListaCidades(this.estadoEscolhido.cod).subscribe(response=>{
      this.cidades = response.value;
    });
  }

  listarBairros(){
    this.cadCliService.getListaBairros(this.cidadeEscolhida.cod).subscribe(response=>{
      this.bairros = response;
    });
  }

}
