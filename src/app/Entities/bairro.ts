import { Cidade } from './cidade';

export class Bairro{
    cod: number;
    nome: String;
    cidade: Cidade;

    constructor(){
        this.cidade = new Cidade();
    }
}