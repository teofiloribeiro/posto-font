import { Estado } from './estado';

export class Cidade{
    cod: number;
    nome: String;
    estado: Estado;

    constructor(){
        this.estado = new Estado();
    }
}