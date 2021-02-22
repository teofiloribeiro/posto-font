import { Bairro } from './bairro';
import { TipoPessoa } from '../Enums/tipo-pessoa';
import { Cidade } from './cidade';
import { Estado } from './estado';

export class DataMining{
    bairro:Bairro;
    cidade:Cidade;
    estado:Estado;
    tipoPessoa:string;
    sexo:string;
    modelo:string;

    constructor(){
        this.bairro = new Bairro();
    }
}