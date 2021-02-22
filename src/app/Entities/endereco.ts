import { Coordenadas } from './coordenadas';
import { Bairro } from './bairro';

export class Endereco{
    cod: number;
    rua:String;
    cep:String;
    numero:String;
    complemento:String;
    coordenadas: Coordenadas;
    bairro: Bairro;

    constructor(){
        this.coordenadas = new Coordenadas();
        this.bairro = new Bairro();
    }
}